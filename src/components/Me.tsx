import Image from "next/image"

const Me = () => {
    return <div>
        <Image alt="dv0c" src={'/me.jpg'} width={200} height={200} className="rounded-2xl" />
        <div className="mt-5 space-y-3">
            <h2 className="text-2xl font-semibold">I'm Anastasios Meintanis</h2>
            <p className="text-lg max-w-[320px]">
                I'm a software engineer, currently working at <a href="https://www.data-base.gr/">Data Base</a>.
            </p>
        </div>
    </div>
}

export default Me