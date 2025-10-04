#!/usr/bin/env bash

# ATM Texture Generator Script
# Generates all ATM block textures in 256x256 resolution

echo "Generating ATM textures..."

# Create HD directory if it doesn't exist
mkdir -p "RP/textures/blocks/"

# Front texture (V3) - Main ATM with screen, keyboard and slot
magick -size 256x256 xc:'#2A2A2A' \
  -fill '#292d30' -draw 'rectangle 0,0 255,255' \
  -fill '#4A4A4A' -draw 'rectangle 16,16 239,60' \
  -fill '#FFFFFF' -font Arial-Bold -pointsize 40 -draw 'text 80,53 "ATM"' \
  -fill '#000000' -draw 'rectangle 24,80 231,200' \
  -fill '#0066CC' -draw 'rectangle 28,84 227,196' \
  -fill '#000000' -draw 'rectangle 160,80 231,200' \
  -fill '#555555' -draw 'rectangle 164,84 227,169' \
\
  -fill '#777777' -draw 'rectangle 168,88 178,104' \
  -fill '#777777' -draw 'rectangle 182,88 192,104' \
  -fill '#777777' -draw 'rectangle 196,88 206,104' \
  -fill '#FFFFFF' -font Arial -pointsize 16 -draw 'text 170,102 "1 2 3"' \
  -fill '#ff0000' -draw 'rectangle 210,92 223,100' \
\
  -fill '#777777' -draw 'rectangle 168,108 178,124' \
  -fill '#777777' -draw 'rectangle 182,108 192,124' \
  -fill '#777777' -draw 'rectangle 196,108 206,124' \
  -fill '#FFFFFF' -font Arial -pointsize 16 -draw 'text 170,122 "4 5 6"' \
  -fill '#ffff00' -draw 'rectangle 210,112 223,120' \
\
\
  -fill '#777777' -draw 'rectangle 168,128 178,144' \
  -fill '#777777' -draw 'rectangle 182,128 192,144' \
  -fill '#777777' -draw 'rectangle 196,128 206,144' \
  -fill '#FFFFFF' -font Arial -pointsize 16 -draw 'text 170,142 "7 8 9"' \
  -fill '#009900' -draw 'rectangle 210,132 223,140' \
\
  -fill '#777777' -draw 'rectangle 168,148 178,164' \
  -fill '#777777' -draw 'rectangle 182,148 192,164' \
  -fill '#777777' -draw 'rectangle 196,148 206,164' \
  -fill '#FFFFFF' -font Arial -pointsize 16 -draw 'text 170,162 " * 0 #"' \
  -fill '#777777' -draw 'rectangle 210,152 223,160' \
\
  -fill '#2A2A2A' -draw 'rectangle 171,184 220,190' \
\
  -fill '#2A2A2A' -draw 'rectangle 60,215 195,235' \
  -fill '#666666' -draw 'rectangle 64,219 191,231' \
  "RP/textures/blocks/atm_front.png"

# Back texture - "BANKOMAT" with centered text and bars
magick -size 256x256 xc:'#2A2A2A' \
  -fill '#292d30' -draw 'rectangle 0,0 255,255' \
  -fill '#4A4A4A' -draw 'rectangle 16,16 239,60' \
  -fill '#FFFFFF' -font Arial-Bold -pointsize 40 -draw 'text 80,53 "ATM"' \
  "RP/textures/blocks/atm_back.png"

# Left texture - "ATM" with bars on the left side
magick -size 256x256 xc:'#2A2A2A' \
  -fill '#292d30' -draw 'rectangle 0,0 255,255' \
  -fill '#4A4A4A' -draw 'rectangle 16,16 239,60' \
  -fill '#FFFFFF' -font Arial-Bold -pointsize 40 -draw 'text 80,53 "ATM"' \
  -fill '#808080' -draw 'rectangle 20,100 107,115' \
  -fill '#A0A0A0' -draw 'rectangle 20,120 107,135' \
  -fill '#C0C0C0' -draw 'rectangle 20,140 107,155' \
  -fill '#E0E0E0' -draw 'rectangle 20,160 107,175' \
  "RP/textures/blocks/atm_right.png"

# Right texture - "ATM" with bars on the right side
magick -size 256x256 xc:'#2A2A2A' \
  -fill '#292d30' -draw 'rectangle 0,0 255,255' \
  -fill '#4A4A4A' -draw 'rectangle 16,16 239,60' \
  -fill '#FFFFFF' -font Arial-Bold -pointsize 40 -draw 'text 80,53 "ATM"' \
  -fill '#808080' -draw 'rectangle 149,100 236,115' \
  -fill '#A0A0A0' -draw 'rectangle 149,120 236,135' \
  -fill '#C0C0C0' -draw 'rectangle 149,140 236,155' \
  -fill '#E0E0E0' -draw 'rectangle 149,160 236,175' \
  "RP/textures/blocks/atm_left.png"

# Top texture - No text, just uniform color without bars
magick -size 256x256 xc:'#2A2A2A' \
  -fill '#292d30' -draw 'rectangle 0,0 255,255' \
  -fill '#000000' -draw 'rectangle 220,220 230,230' \
  "RP/textures/blocks/atm_top.png"

# Bottom texture - No text, just uniform color without bars
magick -size 256x256 xc:'#2A2A2A' \
  -fill '#292d30' -draw 'rectangle 0,0 255,255' \
  "RP/textures/blocks/atm_bottom.png"

echo "ATM textures generated successfully!"
echo "Files created:"
echo "  - atm_front.png (Main front with screen, keyboard, slot)"
echo "  - atm_back.png"
echo "  - atm_left.png (Left side with bars on left)"
echo "  - atm_right.png (Right side with bars on right)"
echo "  - atm_top.png"
echo "  - atm_bottom.png"
