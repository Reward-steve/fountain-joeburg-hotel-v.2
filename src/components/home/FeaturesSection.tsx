"use client";

import { motion } from "framer-motion";
import { Anchor, Waves, Wind } from "lucide-react";
import { BranchFeature } from "./BranchFeature";
import { fadeInUpVariant } from "../../constant/index";

export default function FeaturesSection() {
  return (
    <section className="relative border-y border-white/5 bg-[#0F1115]/40 py-12 sm:py-20 lg:py-24 overflow-hidden backdrop-blur-md">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[150px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
        className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8 relative z-10"
      >
        <motion.div variants={fadeInUpVariant}>
          <BranchFeature
            icon={<Anchor className="text-gold" size={22} />}
            title="Signature Service"
            subTitle="Experience our intuitive white-glove concierge available around the clock."
          />
        </motion.div>

        <motion.div variants={fadeInUpVariant}>
          <BranchFeature
            icon={<Waves className="text-gold" size={22} />}
            title="Aquatic Stillness"
            subTitle="Our 360-degree infinity pool overlooks the vibrant pulse of Sandton."
          />
        </motion.div>

        <motion.div variants={fadeInUpVariant}>
          <BranchFeature
            icon={<Wind className="text-gold" size={22} />}
            title="Pure Atmosphere"
            subTitle="Equipped with state-of-the-art oxygen-enriched therapy in every suite."
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
