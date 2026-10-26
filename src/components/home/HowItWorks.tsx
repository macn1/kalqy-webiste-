import { SectionHeading } from "@/components/layout/SectionHeading";

const steps = [
  { title: "Get Kalqy", text: "Download the app for Windows or Mac onto a computer with a webcam." },
  { title: "Allow the camera", text: "When Kalqy asks to use the camera, choose Allow. The games use it to see movement." },
  { title: "Pick a game", text: "Choose from Kalqy's games, from reading and math to music and calm sensory play." },
  { title: "Move to play", text: "Jump, reach, point and balance. The game follows the child's movement on screen." },
];

export function HowItWorks({ id = "how-title", heading = true }: { id?: string; heading?: boolean }) {
  return (
    <section className="section section--sheet" aria-labelledby={id}>
      <div className="container">
        {heading && (
          <SectionHeading
            id={id}
            eyebrow="How it works"
            title="From download to dancing in four steps"
            intro="No fancy hardware required, just a webcam."
          />
        )}
        <ol className="steps" data-stagger>
          {steps.map((s) => (
            <li className="step" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
