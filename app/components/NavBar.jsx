import Image from "next/image";
import Link from "next/link";
import Logo from "./dojo-logo.png"

export default function NavBar() {
  return (
    <>
      {" "}
      <nav>
        <Image src={Logo} alt="logo image" width={70} quality={100} placeholder="blur"/>
        <h1>Helpdesk</h1>
        <Link href="/">Dashbord</Link>
        <Link href="/tickets">Tickets</Link>
      </nav>
    </>
  );
}
