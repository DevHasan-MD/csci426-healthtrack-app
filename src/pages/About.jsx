export default function About() {
  return (
    <section className="wrap narrow">
      <h1>About HealthTrack</h1>
      <p>HealthTrack is a personal Health tracker built for the CSCI426 Advanced Web Programming course. It helps you build a daily routine without accounts, ads or sign-ups.</p>
      <h2>Why we built it</h2>
      <p>Most fitness apps ask for personal data before they show you anything. HealthTrack keeps everything in your browser's local storage, so your logs stay on your device.</p>
      <h2>The team</h2>
      <div className="grid2">
        <article className="panel"><h3>Hasan Mahdi</h3><p>Layout, pages and deployment.</p></article>
        <article className="panel"><h3>Hasan Bazzel</h3><p>Dashboard, logging and data handling.</p></article>
      </div>
    </section>
  );
}
