import React from 'react';
import { LabProps } from '@/libs/interface';
import { motion } from 'framer-motion';
import Link from 'next/link';

const LabComponent = (props: LabProps) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <Link href={props.labLocationLink} target="_blank" className="text-gray-800">
      <motion.div
        className="text-center p-4 bg-[#81b29a] rounded"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        whileHover={{ scale: 1.1 }}
        transition={{ delay: 0.3 }}
      >
        <h1 className="text-2xl font-bold mb-2">{props.labName}</h1>
      </motion.div>
    </Link>
  );
};

export default LabComponent;
