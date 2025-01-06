'use client'

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image, { StaticImageData } from 'next/image'
import { Transition } from '@headlessui/react'

interface Item {
    img: StaticImageData
    desc: string
    buttonIcon: StaticImageData
}

const ProgressSlider = ({ duration, items }: { duration: number, items: Item[] }) => {
    const [active, setActive] = useState(0);
    const [progress, setProgress] = useState(0);
    const frame = useRef(0);
    const firstFrameTime = useRef(0);
    const itemsRef = useRef<HTMLDivElement>(null);

    const animate = useCallback((now: number) => {
        let timeFraction = (now - firstFrameTime.current) / duration;
        if (timeFraction <= 1) {
            setProgress(timeFraction * 100);
            frame.current = requestAnimationFrame(animate);
        } else {
            timeFraction = 1;
            setProgress(0);
            setActive((active + 1) % items.length);
        }
    }, [active, duration, items.length]);

    useEffect(() => {
        firstFrameTime.current = performance.now();
        frame.current = requestAnimationFrame(animate);
        return () => {
            cancelAnimationFrame(frame.current);
        };
    }, [animate, active]);

    const heightFix = () => {
        if (itemsRef.current && itemsRef.current.parentElement) {
            itemsRef.current.parentElement.style.height = `${itemsRef.current.clientHeight}px`;
        }
    };

    useEffect(() => {
        heightFix();
    }, [items]);

    return (
        <div className="w-full max-w-5xl mx-auto text-center" ref={itemsRef}>
            {/* Item image */}
            <div className="transition-all duration-150 delay-300 ease-in-out">
                <div className="relative flex flex-col">

                    {items.map((item, index) => (
                        <Transition
                            key={index}
                            show={active === index}
                            enter="transition ease-in-out duration-500 delay-200 order-first"
                            enterFrom="opacity-0 scale-105"
                            enterTo="opacity-100 scale-100"
                            leave="transition ease-in-out duration-300 absolute"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                            beforeEnter={() => heightFix()}
                        >
                            <Image className="rounded-xl" src={item.img} width={1024} height={576} alt={item.desc} />
                        </Transition>
                    ))}

                </div>
            </div>
            {/* Buttons */}
            <div className="max-w-xs sm:max-w-sm md:max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

                {items.map((item, index) => (
                    <button
                        key={index}
                        className="p-2 rounded focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 group"
                        onClick={() => { setActive(index); setProgress(0) }}
                    >
                        <span className={`text-center flex flex-col items-center ${active === index ? '' : 'opacity-50 group-hover:opacity-100 group-focus:opacity-100 transition-opacity'}`}>
                            <span className="flex items-center justify-center relative w-9 h-9 rounded-full bg-indigo-100 mb-2">
                                <Image src={item.buttonIcon} alt={item.desc} />
                            </span>
                            <span className="block text-sm font-medium text-slate-900 mb-2">{item.desc}</span>
                            <span className="block relative w-full bg-slate-200 h-1 rounded-full" role="progressbar" aria-valuenow={active === index ? progress : 0}>
                                <span className="absolute inset-0 bg-indigo-500 rounded-[inherit]" style={{ width: active === index ? `${progress}%` : '0%' }}></span>
                            </span>
                        </span>
                    </button>
                ))}

            </div>
        </div>
    );
};

export default ProgressSlider;