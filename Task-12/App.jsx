function Header() {
  return (
    <header>
      <h1>My React Website</h1>
      <nav>
        Home | About | Contact
      </nav>
    </header>
  );
}

function Main() {
  return (
    <main>
      <h2>Welcome to React</h2>
      <p>This is my first React application.</p>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright © 2026 My Website</p>
    </footer>
  );
}

export default function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
