import Nav from "./nav"

const Layout = ({
  children,
  categories,
}: {
  children: any
  categories: any
}) => (
  <div className="relative">
    <Nav categories={categories} />

    <div className="absolute top-16 w-full">
      <div className="w-16 border-r border-yellow-500 fixed h-screen mb-8"></div>
      <div className="ml-16">{children}</div>
    </div>

    <div className="fixed bottom-0 w-full h-8 border-t border-yellow-500 bg-white">
      <span className="ml-4">
        If you want add your work here especially not under NDA —{" "}
      </span>
      <span className="border border-dashed rounded-full border-yellow-500">
        drop a line
      </span>
    </div>
  </div>
)

export default Layout
