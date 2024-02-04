import Menu from '../components/Menu';
import Content from '../pages/Content';

export default function Layout() {
  const title = 'Home';
  return (
    <div>
      <Menu />
      <Content title={title} />
    </div>
  );
}
