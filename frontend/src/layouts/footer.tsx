import DynamicLayout from './DynamicLayout'

export default function Footer() {
  return (
    <DynamicLayout border={false}>
        <div className="w-full mx-auto m-4 p-4 flex justify-center flex-col items-center text-sm text-semibold">
        <p>Copyright &copy; 2022 - SE GH JO LR</p>
            <p>Software Laboratory Center</p>
          </div>
        {/* <footer className="w-[80%] mx-auto flex justify-center flex-col items-center mt-10 text-sm text-semibold">
            <p>Copyright &copy; 2022 - SE GH JO LR</p>
            <p>Software Laboratory Center</p>
          </footer> */}
    </DynamicLayout>
  )
}
