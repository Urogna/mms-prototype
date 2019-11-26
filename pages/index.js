import React from 'react'
import Head from 'next/head'
import {RegisterForm,LoginForm,StartForm} from '../components/form.tsx'
import Container from '../components/container.tsx'
import '../public/static/output.css';

const Home = () => (
  <div className="whitespace-pre-wrap overflow-scroll">
    <script src="https://cdn.jsdelivr.net/npm/gun/examples/jquery.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gun/gun.js"></script>
    <StartForm color={"gray"}/>
  </div>
)

export default Home
