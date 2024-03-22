import Accordion from "./components/Accordion";

function App() {
  return (
    <main>
      <div className="my-24 px-6">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="mt-6 text-5xl xl:text-6xl font-semibold text-gray-950 dark:text-white">
            Tailus <br /> <span className="text-gray-500">React Boilerplate</span>
          </h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg">Start your React project with Tailus Themer and Radix-UI installed</p>
        </div>
        <div className="sm:border flex items-center justify-center aspect-video max-w-4xl mx-auto sm:rounded-[--card-border-radius] sm:border-[--ui-light-border-color] sm:dark:border-[--ui-dark-border-color]">
          <Accordion />
        </div>
      </div>
    </main>
  );
}

export default App;
