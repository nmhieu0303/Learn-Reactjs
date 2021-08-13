/* eslint-disable no-unused-vars */
import React from 'react'

export const DarkThemeToDoList = {
    bgColor: '#343a40',
    color: '#fff',
    borderButton: '1px solid #fff',
    borderRadiusButton: 'none',
    hoverTextColor: '#343a40',
    hoverBgColor: '#fff',
    borderColor: '#343a40'
}

export const LightThemeToDoList = {
    bgColor: '#fff',
    color: '#7952b3',
    borderButton: '1px solid #7952b3',
    borderRadiusButton: 'none',
    hoverTextColor: '#fff',
    hoverBgColor: '#7952b3',
    borderColor: '#7952b3'
}

export const PrimaryThemeToDoList = {
    bgColor: '#fff',
    color: '#343a40',
    borderButton: '1px solid #343a40',
    borderRadiusButton: 'none',
    hoverTextColor: '#fff',
    hoverBgColor: '#343a40',
    borderColor: '#343a40'
}

export const configTheme = [
    {
        id: 1,
        name:'Primary theme',
        theme: PrimaryThemeToDoList
    },
    {
        id: 2,
        name:'Light theme',
        theme: LightThemeToDoList
    },
    {
        id: 3,
        name:'Dark theme',
        theme: DarkThemeToDoList
    }
]

