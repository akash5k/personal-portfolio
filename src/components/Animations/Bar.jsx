import React from 'react'
import { motion } from 'framer-motion'

const Bar = () => {
  return (
    <>
      <span className='relative z-10 w-32 h-1.5 overflow-hidden bg-secondary-600 opacity-30 rounded-full mt-4'>
        <motion.span
          className='absolute left-0 top-0 w-2 h-full bg-secondary-900 rounded-full'
          initial={{ x: -10 }} 
          animate={{ x: 130 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
        </motion.span>
      </span>
    </>
  )
}

export default Bar
