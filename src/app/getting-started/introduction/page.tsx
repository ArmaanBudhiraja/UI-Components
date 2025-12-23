import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LinkPreview } from "@/components/ui/link-preview";

export default function Page() {
  return (
    <div className="flex flex-col h-full py-8 items-center xl:px-48 lg:px-16 px-6 space-y-12 overflow-x-hidden">
      <div className="w-full space-y-6">
        <h1 className="text-center font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-tight tracking-tight">
          Introduction
        </h1>
        <p className="leading-relaxed">
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Open Source.
        </p>
        <p className="leading-relaxed">
          Every component is made with utmost care and attention to detail. We
          prioritize ease of use while ensuring flexibility for customization.
        </p>
        <p className="leading-relaxed">
          A lot of inspiration is taken from{" "}
          <LinkPreview url="https://ui.aceternity.com/" className="font-bold">
            Aceternity UI
          </LinkPreview>{" "}
          , bringing together modern design principles and user-centric
          functionality.
        </p>
        <p className="leading-relaxed">
          This is NOT just a component library. It's a collection of reusable
          components that you can directly copy and paste into your apps.
          Everything is open-source, and fully customizable to suit your
          project's needs.
        </p>
        <p className="leading-relaxed">
          Built on top of{" "}
          <LinkPreview url="https://ui.shadcn.com/" className="font-bold">
            Shad CN
          </LinkPreview>{" "}
          , we recommend using Aceternity components, like the input field, for
          consistency and design harmony.
        </p>
        <p className="leading-relaxed">
          Select the components you need. Copy and paste the code into your
          project, and customize as necessary. The code is yours to modify and
          enhance.
        </p>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Why Use These Components?</AccordionTrigger>
            <AccordionContent>
              These components are designed to save you time while providing the
              flexibility to adapt them to your unique design system. Whether
              you're building a small prototype or a large-scale application,
              these components can integrate seamlessly into any project.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How to Use</AccordionTrigger>
            <AccordionContent>
              To get started, simply select the components that fit your
              project’s needs. Once copied, paste the code into your project,
              and feel free to modify it to suit your specific design
              requirements. The components are designed to be minimal and
              modular, allowing you to extend them easily.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Customization & Flexibility</AccordionTrigger>
            <AccordionContent>
              Customizing these components is simple. Each component is built
              using Tailwind CSS classes, making it easy to adjust styles like
              colors, spacing, typography, and more. You can also extend
              components by adding additional props or custom styling to match
              your project’s needs.
              <br />
              Our goal is to provide components that are simple yet flexible,
              offering the building blocks for creating powerful, user-friendly
              interfaces.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Best Practices</AccordionTrigger>
            <AccordionContent>
              When using these components, we recommend adhering to the best
              practices for UI design and accessibility. Ensure that your UI is
              responsive, making use of mobile-first design principles. Also,
              prioritize accessibility by using semantic HTML elements and
              ensuring good contrast and font readability.
              <br />
              You can also create a consistent design system by choosing
              components with similar visual styles, which will help maintain a
              harmonious look and feel across your app.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Open Source & Community</AccordionTrigger>
            <AccordionContent>
              Since these components are open-source, you can contribute to the
              project by submitting pull requests, reporting issues, or
              suggesting improvements. We encourage collaboration and are
              committed to making this collection of components as useful as
              possible for developers everywhere.
              <br />
              Join the community and help us improve! The code is free to use
              and modify, so feel free to adapt it to any project, big or small.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
