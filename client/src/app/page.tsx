"use client"
import Image from 'next/image'
import styles from './page.module.css'
import React from 'react';
import Grid from '@mui/material/Grid';
import Navbar from '../components/Navbar';
import Footer from '../components/FooterComponent';

export default function Home() {
  return (
    <main>
       <Navbar/>
        <div className="gradient-container">
          <div className={styles['card-container']}>
            <h1>teste pratico</h1>
          </div>          
        </div>
      <Footer/>
    </main>
  )
}
