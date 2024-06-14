import { Display, Link, Text, Title } from "@tailus-ui/typography"
import Card from "@tailus-ui/Card";
import Separator from "@components/tailus-ui/Separator";

function App() {
  return (
    <main>
      <div className="max-w-2xl mx-auto my-24 px-6 space-y-12">
        <div className="space-y-3">
          <Display size="4xl" weight="medium">How will you build it ?</Display>
          <Text>Start your project with Tailus UI React and Radix-UI installed</Text>
        </div>
        <div className="grid sm:grid-cols-3 gap-3">
          <Card variant="outlined" className="space-y-2" href="https://ui.tailus.io/react/get-started/introduction">
            <Title size="base" weight="medium">Get Started</Title>
            <Text>Learn how to install Tailus UI React in your project.</Text>
          </Card>
          <Card variant="outlined" className="space-y-2" href="https://ui.tailus.io/react/components/accordion">
            <Title size="base" weight="medium">Components</Title>
            <Text>Your starter blocks for building custom web UIs</Text>
          </Card>
          <Card variant="outlined" className="space-y-2" href="https://ui.tailus.io/react/visualizations">
            <Title size="base" weight="medium">Visualizations</Title>
            <Text>Learn how to use Data Visualization components</Text>
          </Card>
        </div>
        <div className="flex items-center gap-3">
          <Link href="https://github.com/tailus-ui">Github</Link>
          <Separator orientation="vertical" className="h-4" />
          <Link href="https://x.com/tailus_ui">Twitter / X</Link>
        </div>
      </div>
    </main>
  );
}

export default App;
