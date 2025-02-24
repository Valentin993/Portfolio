import Link from "next/link";

export default function NotFound() {
  return (
    <section className="h-[918px]">
      <div className="text-7xl text-[#FFFFFF]/[.25] font-[AllertaStencil] flex-col items-center pt-[300px] ">
        <h2 className="block text-center">Page Not Found</h2>
        <span className="block text-center pt-5">404</span>
      </div>

      <div className="flex justify-center mt-[40px]">
        <Link
          href="/"
          className=" text-center border-0 text-black bg-[#D9D9D9]/[.20] font-bold text-2xl  rounded-3xl px-6 py-4 hover:bg-[#D9D9D9]/[.50] hover:text-[#FFFFFF]/[.50] w-[300px]"
        >
          Go back to Homepage
        </Link>
      </div>
    </section>
  );
}
