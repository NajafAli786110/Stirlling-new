import Image from "next/image";
import imgMain from "../images/Rectangle-122.jpg"
import Link from "next/link";

export default function Services() {
    return (
        <div className="py-12 w-[90%] flex flex-col items-center justify-center">
            <div className="w-full flex flex-col items-center justify-center gap-12">
                <h2 className='regular-42'>Services</h2>
                <div className="w-full flex items-center gap-10">
                    <div className="flex flex-col gap-4">
                        <h4 className="uppercase font-bold">baby photography</h4>
                        <p> Capturing the innocence and wonder of your little ones, creating timeless memories you'll cherish forever.</p>
                        <Image src={imgMain} width={253} height={154} />
                        <Link href="/" className="secondary-btn">Book Now</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="uppercase font-bold">baby photography</h4>
                        <p> Capturing the innocence and wonder of your little ones, creating timeless memories you'll cherish forever.</p>
                        <Image src={imgMain} width={253} height={154} />
                        <Link href="/" className="secondary-btn">Book Now</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="uppercase font-bold">baby photography</h4>
                        <p> Capturing the innocence and wonder of your little ones, creating timeless memories you'll cherish forever.</p>
                        <Image src={imgMain} width={253} height={154} />
                        <Link href="/" className="secondary-btn">Book Now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
