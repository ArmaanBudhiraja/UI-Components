interface AppHeadingProps {
  heading: string;
  description: string;
}

export default function AppHeading({ heading, description }: AppHeadingProps) {
  return (
    <div className="space-y-4 md:w-full w-[20rem]">
      <h1 className="font-bold text-5xl">{heading}</h1>
      <p>{description}</p>
    </div>
  );
}
