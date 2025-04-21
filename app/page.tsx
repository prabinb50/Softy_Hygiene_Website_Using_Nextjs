import Categories from '@/components/website/Categories'
import { HeroSection } from '@/components/website/HeroSection'
import HygieneSolution from '@/components/website/HygieneSolution'
import ImpOfHygieneSolution from '@/components/website/ImpOfHygieneSolution'
import MinimeFamily from '@/components/website/MinimeFamily'
import SoftyHygiene from '@/components/website/SoftyHygiene'
import React from 'react'

export default function HomePage() {
  return (
    <div className=''>
      <HeroSection></HeroSection>
      <Categories></Categories>
      <SoftyHygiene></SoftyHygiene>
      <HygieneSolution></HygieneSolution>
      <ImpOfHygieneSolution></ImpOfHygieneSolution>
      <MinimeFamily></MinimeFamily>
    </div>
  )
}
