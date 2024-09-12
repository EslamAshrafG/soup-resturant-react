/* eslint-disable react/prop-types */
import "../../../index.css";

const featuresDate = [
  {
    title: "Pick a dish",
    desc: "Vivamus volutpat leo dictum risus ullamcorper condimentum.",
    icon: (
      <svg viewBox="0 0 1024 1024" fill="#ddae71" height="3em" width="3em">
        <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z" />
      </svg>
    ),
  },
  {
    title: "Make a payment",
    desc: "Vivamus volutpat leo dictum risus ullamcorper condimentum.",
    icon: (
      <svg viewBox="0 0 512 512" fill="#ddae71" height="3em" width="3em">
        <path d="M47.5 104H432V51.52a16 16 0 00-19.14-15.69l-368 60.48a16 16 0 00-12 10.47A39.69 39.69 0 0147.5 104zM463.5 128h-416a16 16 0 00-16 16v288a16 16 0 0016 16h416a16 16 0 0016-16V144a16 16 0 00-16-16zM368 320a32 32 0 1132-32 32 32 0 01-32 32z" />
        <path d="M31.33 259.5V116c0-12.33 5.72-18.48 15.42-20 35.2-5.53 108.58-8.5 108.58-8.5s-8.33 16-27.33 16V128c18.5 0 31.33 23.5 31.33 23.5L84.83 236z" />
      </svg>
    ),
  },
  {
    title: "Recieve your food",
    desc: "Vivamus volutpat leo dictum risus ullamcorper condimentum.",
    icon: (
      <svg fill="#ddae71" viewBox="0 0 16 16" height="3em" width="3em">
        <path d="M8.186 1.113a.5.5 0 00-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 011.114 0l7.129 2.852A.5.5 0 0116 3.5v8.662a1 1 0 01-.629.928l-7.185 2.874a.5.5 0 01-.372 0L.63 13.09a1 1 0 01-.63-.928V3.5a.5.5 0 01.314-.464L7.443.184z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap items-center justify-center">
        {featuresDate.map((feature) => (
          <Feature
            key={feature.title}
            title={feature.title}
            icon={feature.icon}
            desc={feature.desc}
          />
        ))}
      </div>
    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="flex gap-3 bg-darkColor p-10 text-white border-b-red border-2">
      <div>{icon}</div>
      <div>
        <h3 className="text-2xl mb-2">{title}</h3>
        <p className="text-grayColor text-sm">{desc}</p>
      </div>
    </div>
  );
}
