import DynamicLayout from "./DynamicLayout";

export default function Header() {
  return (
    <div className=" bg-white">
      <DynamicLayout border={true}>
        <div className="flex justify-between items-end pb-6">
          <div className="left flex">
            <img
              src="/download.png"
              alt="gambar awal"
              width={35}
              height={108}
              className="w-[35px] h-[108px]"
            ></img>
            <div className="ml-[20px] mt-[15px] w-[137px] h-[98px]">
              <img
                className="w-auto h-auto box-border"
                src="/logo.png"
                alt="gambar awal"
                width={167}
                height={98}
              ></img>
            </div>
          </div>
          <div className="right flex flex-col items-end">
            <div className="text-end">
              <span>Welcome</span>
              <span>NA</span>
            </div>
            <div className="text-end">Sat, 14 Oct 2023 10:24:12</div>
          </div>
        </div>
      </DynamicLayout>
    </div>
  );
}
