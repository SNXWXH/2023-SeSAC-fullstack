import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Subpage',
  description: 'Generated by create next app',
};

export default function SubpageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}