import Input from './components/Input.tsx'
import Button from './components/Button.tsx';
import Container from './components/Container.tsx'

function App() {
  return (
    <main>
      <Input id="name" label="Your name" type="text"/>
      <Input id="age" label="Your age" type="number"/>
      <p>
      <Button el="button">A Button</Button>
      </p>
      <p>
      <Button el="anchor" href='https://google.com'>A Link</Button>
      </p>
      <Container as={Button} el="button">Click Me</Container>
    </main>
  );
}

export default App;
