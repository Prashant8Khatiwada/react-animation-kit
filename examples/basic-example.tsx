'use client'

import { motion } from 'framer-motion'
import { fadeIn, fadeInUp, slideUp, zoomIn, fadeOut } from '../src'
import { useInView, useReducedMotion } from '../src/hooks'
import { useRef } from 'react'

/**
 * Basic example demonstrating library usage
 */
export default function Example() {
    const ref = useRef(null)
    const isInView = useInView(ref, { threshold: 0.3, once: true })
    const prefersReduced = useReducedMotion()

    return (
        <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
            <h1>@yourorg/motion - Examples</h1>

            <section style={{ marginTop: '3rem' }}>
                <h2>Entrance Animations</h2>

                <div style={{ display: 'grid', gap: '2rem', marginTop: '2rem' }}>
                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                        style={cardStyle}
                    >
                        <h3>Fade In</h3>
                        <p>Simple opacity transition</p>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        style={cardStyle}
                    >
                        <h3>Fade In Up</h3>
                        <p>Fade with upward slide</p>
                    </motion.div>

                    <motion.div
                        variants={slideUp}
                        initial="hidden"
                        animate="visible"
                        style={cardStyle}
                    >
                        <h3>Slide Up</h3>
                        <p>Vertical slide entrance</p>
                    </motion.div>

                    <motion.div
                        variants={zoomIn}
                        initial="hidden"
                        animate="visible"
                        style={cardStyle}
                    >
                        <h3>Zoom In</h3>
                        <p>Scale up entrance</p>
                    </motion.div>
                </div>
            </section>

            <section style={{ marginTop: '5rem' }} ref={ref}>
                <h2>Scroll-Triggered Animation</h2>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: prefersReduced ? 0.01 : 0.6 }}
                    style={cardStyle}
                >
                    <h3>In View Animation</h3>
                    <p>This animates when scrolled into view</p>
                    <p><small>Respects reduced motion: {prefersReduced ? 'Yes' : 'No'}</small></p>
                </motion.div>
            </section>

            <section style={{ marginTop: '5rem' }}>
                <h2>Interactive Example</h2>
                <motion.button
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    style={buttonStyle}
                >
                    Hover & Click Me
                </motion.button>
            </section>
        </div>
    )
}

const cardStyle: React.CSSProperties = {
    padding: '2rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '12px',
    color: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
}

const buttonStyle: React.CSSProperties = {
    padding: '1rem 2rem',
    background: '#667eea',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
}
