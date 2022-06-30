import Link from "next/link";
import Image from "next/image";

export default function ProjectCard() {
  return (
    <div>
      <Link href={"/project/1"}>
        <div>
          <Image src=""></Image>
        </div>
        <div className="skill-stack">React</div>
      </Link>
    </div>
  );
}
