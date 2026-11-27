---
layout: page
title: PATRICIA
description: Real-time singing voice synthesis for Brazilian Portuguese
importance: 1
category: UFS
---

PATRICIA is a real-time singing voice synthesizer for Brazilian Portuguese, developed by Leonardo A. Z. Brum during his master's degree in the Graduate Program in Computer Science (PROCC) of the Universidade Federal de Sergipe (UFS), under the supervision of Edward David Moreno and my co-supervision. Its name is a Portuguese acronym ("Programa que Articula em Tempo Real o Idioma Cantado Inscrito em Arquivo", a program that articulates in real time the sung language written in a file). Singing voice synthesis (SVS) generates a song from its lyrics and its musical notes, and our journal article describes PATRICIA as the first singing synthesizer designed specifically for Brazilian Portuguese.

A systematic mapping of the literature guided the design and led to a concatenative approach, in which the synthesizer assembles recorded speech units from MBROLA diphone databases while the lyrics of the song are provided in advance as a text file. Leonardo implemented the first version in SuperCollider, with the musical notes arriving through the Musical Instrument Digital Interface (MIDI) protocol. Furthermore, we measured processor usage on a personal computer and on a Raspberry Pi, and both platforms showed low load, which supports the goal of running the synthesizer on embedded devices.

The project produced three publications. A first prototype appeared at the International Computer Music Conference (ICMC) in Hong Kong in 2023, and a proof-of-concept validation followed at the Brazilian Symposium on Computer Music (SBCM) in 2025. The journal article in _Música Hodie_ (2026, [DOI: 10.5216/mh.v26.85249](https://doi.org/10.5216/mh.v26.85249)) reports the complete development, the evaluation of demonstration songs by music educators, and the performance analysis, together with the improvements planned for later versions of the synthesizer.
