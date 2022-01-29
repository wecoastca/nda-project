import Nav from "./nav"

const Layout = ({
  children,
  categories,
}: {
  children: any
  categories: any
}) => (
  <div className="relative h-screen">
    <Nav categories={categories} />

    <div className="absolute top-20 w-full layout-sp">
      <div className="hidden w-20 border-r border-yellow-500 h-full fixed mb-8 z-10 md:block"></div>
      <div className="ml-20 flex flex-col md:flex-row h-full">{children}</div>
    </div>

    <div className="fixed bottom-0 w-full h-20 border-t border-yellow-500 bg-white z-10 flex items-center">
      <p className="ml-4">
        Idea — <span className="text-yellow-500">wid0ki</span>, illustrations —{" "}
        <span className="text-yellow-500">Margarita Shatalova</span>, code —{" "}
        <span className="text-yellow-500">Anton Shishov</span>
      </p>
    </div>
  </div>
)

export default Layout
