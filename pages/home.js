import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {RegisterForm,LoginForm,FilsterForm} from '../components/form.tsx'
import HouseList from '../components/list.tsx'
import Container from '../components/container.tsx'
import '../public/static/output.css';

const Home = () => (
  <div className="whitespace-pre-wrap bg-gray-500">
    <script src="https://cdn.jsdelivr.net/npm/gun/examples/jquery.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gun/gun.js"></script>
    <Nav/>
    <Container mod={[
      {
        name:"Results",
        jsx: (<HouseList css={"w-auto h-full float-right"}/>),
        color:"gray"
      },
      {
        name:"Filter",
        jsx: (<FilsterForm color="gray"/>),
        color:"gray"
      }
    ]} css={"w-auto"}/>
  </div>
)

const Nav = () => {
  const links = [
    { href: '/home', label: 'Home' },
    { href: '/menu', label: 'Menu' },
  ].map(link => {
    link.key = `nav-link-${link.href}-${link.label}`
    return link
  })
   //position fixed w-64">
  return (
    <nav className="bg-gray-500 h-16 top-0">
      <ul>
        <li className="pt-1">
          <a  href="/">
            <img src="/static/immobilapp.png" className="w-24 p-2"/>
          </a>
        </li>
        {links.map(({ key, href, label }) => (
          <li key={key} className="pt-4 mr-4 text-2xl">
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>

      <style jsx>{`
        
        nav {
          text-align: center;
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </nav>
  )
}

export default Home
