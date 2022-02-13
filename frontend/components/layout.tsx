import { useRouter } from 'next/router';
import Nav from './nav';

const Layout = ({
  children,
  categories,
}: {
  children: any;
  categories: any;
}) => {
  const router = useRouter();
  // layout-sp
  return (
    <div className="flex flex-col h-screen">
      <Nav categories={categories} />

      <div className="flex w-screen overflow-hidden flex-1">
        <div className="hidden w-16 xl:w-20 border-r border-yellow-500 lg:block shrink-0"></div>
        <div className="flex flex-col justify-evenly my-4 md:my-8 lg:my-0 lg:flex-row lg:justify-start">
          {children}
        </div>
      </div>

      <div className="bottom-0 w-full h-20 border-t border-yellow-500 bg-white flex items-center">
        {router?.asPath === '/' ? (
          <p className="ml-4">
            Idea — <span className="text-yellow-500">wid0ki</span>,
            illustrations —{' '}
            <span className="text-yellow-500">Margarita Shatalova</span>, code —{' '}
            <span className="text-yellow-500">Anton Shishov</span>
          </p>
        ) : (
          <p className="ml-4 relative">
            If you want add your work here especially not under NDA —
            <div className="inline-block blur-lg h-4 w-20 absolute bg-orange-500"></div>
            <span className="z-10">drop a line</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Layout;
