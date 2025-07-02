import { Link } from 'react-router';

type RouterLinkProps = React.ComponentProps<'a'> & {
  href: string;
  children: React.ReactNode;
};

export function RouterLink({ href, children, ...props }: RouterLinkProps) {
  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  );
}
