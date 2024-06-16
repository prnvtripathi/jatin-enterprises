"use client";

import CountUp from "react-countup";

export default function Stats() {
    return (
        <div className="">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 text-secondary-100">
                <div className="flex flex-col rounded-lg px-4 text-center">
                    <dt className="order-last text-lg font-medium text-gray-500">International Clients</dt>

                    <dd className="text-4xl font-bold md:text-5xl">
                        <CountUp
                            end={12}
                            duration={3}
                            suffix="+"
                            enableScrollSpy={true}
                            scrollSpyDelay={500}
                            scrollSpyOnce={true}
                        />
                    </dd>
                </div>

                <div className="flex flex-col rounded-lg px-4 text-center">
                    <dt className="order-last text-lg font-medium text-gray-500">Major Products</dt>

                    <dd className="text-4xl font-bold md:text-5xl">
                        <CountUp
                            end={85}
                            duration={3}
                            suffix="+"
                            enableScrollSpy={true}
                            scrollSpyDelay={500}
                            scrollSpyOnce={true}
                        />
                    </dd>
                </div>

                <div className="flex flex-col rounded-lg px-4 text-center">
                    <dt className="order-last text-lg font-medium text-gray-500">Operational Cities</dt>

                    <dd className="text-4xl font-bold md:text-5xl">
                        <CountUp
                            end={29}
                            duration={3}
                            suffix="+"
                            enableScrollSpy={true}
                            scrollSpyDelay={500}
                            scrollSpyOnce={true}
                        />
                    </dd>
                </div>
            </dl>
        </div>
    )
}