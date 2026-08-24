# Design system

## Overview

URL Encoder / Decoder is a telegraph desk: a message enters on paper, a wire marks the transformation, and the output leaves as a coded telegram.

## Colors

- Telegram cream: `#EEE9DC`
- Ink navy: `#18233A`
- Message paper: `#F7F3E8`
- Stamp red: `#BD4C3F`
- Wire blue: `#6689AA`

## Typography

- Headline: `Iowan Old Style`, `Palatino Linotype`, Georgia.
- Message content and modes: system monospace for code fidelity.
- Explanatory copy: Helvetica system sans.

## Layout

- Large telegraph headline and a physical red processing stamp.
- Dark message desk contains mode selection, two message slips, and a wire connector.
- Mobile stacks input/output while keeping the conversion relationship visible.

## Elevation & Depth

Depth is the dark desk field against cream slips. The output slip flips to paper for a readable result.

## Shapes

Flat slips, thin rules, rectangular controls, and one stamped square/mark language. No floating glass or rounded card grid.

## Components

- Telegraph bar
- Processing stamp
- Mode strip
- Input/output message slips
- Wire connector
- Convert/copy actions
- Error line

## Do's and Don'ts

- Do distinguish component encoding from full URI encoding.
- Do preserve malformed-input feedback and browser-only behavior.
- Don't imply that any message is sent or stored remotely.
- Don't hide the input/output relationship behind a generic form card.
