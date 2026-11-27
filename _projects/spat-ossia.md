---
layout: page
title: Spatialization in ossia score
description: The SpatGRIS spatialization algorithms as a native ossia score process
importance: 5
category: SAT
---

This project brings the spatialization algorithms of SpatGRIS into ossia score, the free and open-source intermedia sequencer that artists use at the Société des arts technologiques (SAT) to write sound, light, and video for immersive spaces. SpatGRIS, developed by the Groupe de recherche en immersion spatiale (GRIS) at the Université de Montréal, serves composers who write for loudspeaker domes and multichannel studios. Combining both tools previously required running SpatGRIS as a separate application next to the sequencer.

I ported the VBAP (Vector Base Amplitude Panning) and MBAP algorithms of SpatGRIS into ossia score as a native process that does not depend on the JUCE framework. The process reads SpatGRIS speaker setup files directly, so that the room configurations composers already use carry over to their ossia score sessions. We tested the implementation in the Satosphère, with its 93.5 loudspeakers, and in the SAT sound studio, with 97 loudspeakers.

In agreement with Jean-Michaël Celerier, who maintains ossia score, the work now lives in the free software extension [score-addon-spat](https://github.com/ossia/score-addon-spat), where it continues toward a first public release.
