"use client";

import { Fragment } from "react";
import styles from "./TapeStrip.module.css";
import { DEFAULT_TAPE_ITEMS } from "@/data/homepage";

function MarqueeRow({ items }: { items: string[] }) {
  return (
    <span className={styles.marqueeRow} aria-hidden="true">
      {items.map((item) => (
        <Fragment key={item}>
          <span className={styles.marqueeItem}>{item}</span>
          <span className={styles.marqueeSep}>·</span>
        </Fragment>
      ))}
    </span>
  );
}

export default function TapeStrip({ items }: { items?: string[] }) {
  const list = items?.length ? items : DEFAULT_TAPE_ITEMS;
  return (
    <div className={styles.tapeWrap} aria-label="Industries we serve">
      <span className="sr-only">{list.join(", ")}</span>
      <div className={styles.tape} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          <MarqueeRow items={list} />
          <MarqueeRow items={list} />
        </div>
      </div>
    </div>
  );
}
