export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>)
{
    return (
        <>
            <nav>Inner Nav </nav>
            {children}
        </>
    );
}
