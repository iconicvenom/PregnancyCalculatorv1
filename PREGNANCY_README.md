# 🤰 Pregnancy Calculator - Your Beautiful Journey

A modern, user-friendly pregnancy calculator website designed with expectant mothers in mind. Features a calming, welcoming atmosphere with soft colors, smooth animations, and an intuitive interface.

## ✨ Features

### 💝 Core Functionality

#### **Multiple Calculation Methods**
1. **By Last Menstrual Period (LMP)**
   - Most common method
   - Enter first day of last period
   - Adjustable cycle length (21-35 days)
   - Uses Naegele's Rule with cycle adjustment

2. **By Conception/Ovulation Date**
   - For those who know their conception date
   - More precise calculation
   - Adds 266 days (38 weeks) from conception

3. **By Ultrasound Dating**
   - Most accurate method
   - Enter ultrasound date and gestational age
   - Calculates backward to determine due date

#### **Comprehensive Results Display**
- **Estimated Due Date** - Full date with beautiful formatting
- **Current Pregnancy Week** - Exact weeks and days
- **Trimester Information** - Current trimester with visual indication
- **Days Remaining** - Countdown to your special day
- **Conception Window** - Estimated conception period
- **Important Milestones Timeline** - All key pregnancy dates
- **Weekly Development Information** - Baby's growth this week
- **Trimester Overview** - Visual journey through pregnancy

### 🎨 Design Elements

#### **Color Scheme**
- Soft pink (#FFB6C1)
- Pastel peach (#FFDAB9)
- Light pink backgrounds (#FFE4E1)
- Lavender accents (#E6E6FA)
- Gentle white spaces

#### **Visual Features**
- **Floating Baby Icons** - Gentle animations of baby-themed emojis
- **Soft Gradients** - Calming color transitions
- **Rounded Corners** - All elements have 15-20px border radius
- **Soft Shadows** - Multiple shadow layers for depth
- **Smooth Animations** - Fade-in, slide-in, bounce effects

#### **Typography**
- **Primary Font**: Quicksand (soft, rounded)
- **Secondary Font**: Poppins (clean, modern)
- Easy to read at all sizes
- Warm and welcoming tone

### 📊 Weekly Development Data

The calculator includes detailed information for key pregnancy weeks:
- **Week 1-4**: Early development
- **Week 8**: Raspberry size - major organs forming
- **Week 12**: Lime size - end of first trimester
- **Week 16**: Avocado size - second trimester begins
- **Week 20**: Banana size - halfway point!
- **Week 24**: Corn size - viability milestone
- **Week 28**: Eggplant size - third trimester begins
- **Week 32**: Jicama size - rapid growth
- **Week 36**: Honeydew size - almost ready!
- **Week 40**: Watermelon size - due date!

Each week includes:
- Size comparison with emoji
- Development description
- Key milestones and developments

### 🗓️ Timeline Features

Interactive timeline showing:
- Last menstrual period
- Conception window
- End of first trimester (12 weeks)
- Halfway point (20 weeks)
- Viability (24 weeks)
- Third trimester start (28 weeks)
- Full term (37 weeks)
- Estimated due date

Past events are marked with checkmarks and faded slightly.

### 📱 Responsive Design

Fully responsive across all devices:
- **Desktop** (>968px): Full layout with side-by-side content
- **Tablet** (768-968px): Adjusted grid layouts
- **Mobile** (<768px): Stacked layout optimized for small screens
- Touch-friendly interface

## 🚀 How to Use

1. **Open the Website**: Launch `pregnancy-calculator.html` in any modern browser

2. **Choose Calculation Method**:
   - By LMP Date (default)
   - By Conception Date
   - By Ultrasound

3. **Enter Your Information**:
   - For LMP: Enter first day of last period and cycle length
   - For Conception: Enter conception/ovulation date
   - For Ultrasound: Enter ultrasound date and gestational age

4. **Calculate**: Click "Calculate Due Date"

5. **View Results**: Scroll through comprehensive pregnancy information

## 🎯 Technical Details

### **Calculation Algorithms**

#### LMP Method (Naegele's Rule)
```
Due Date = LMP + 280 days + (cycle length - 28 days)
```

#### Conception Method
```
Due Date = Conception Date + 266 days
```

#### Ultrasound Method
```
Due Date = Ultrasound Date + (280 - days already pregnant)
```

### **Gestational Age Calculation**
```
Weeks = floor(days since LMP / 7)
Days = days since LMP % 7
```

### **Trimester Determination**
- First Trimester: Weeks 1-13
- Second Trimester: Weeks 14-27
- Third Trimester: Weeks 28-40+

## 💕 User Experience Features

### **Smooth Animations**
- Fade-in for results section
- Slide-in for form elements
- Bounce effect on icons
- Pulse effect on baby size emoji
- Floating background icons

### **Interactive Elements**
- Hover effects on all cards
- Radio button custom styling
- Timeline with visual progress
- Active trimester highlighting
- Smooth scrolling to results

### **Input Validation**
- Date inputs limited to past dates
- Cycle length: 21-35 days
- Ultrasound weeks: 0-42
- Ultrasound days: 0-6
- User-friendly error messages

### **Helpful Features**
- Default LMP set to 8 weeks ago (typical calculation time)
- Helpful hints under each input
- Clear labels with emoji icons
- Conditional form fields based on method
- Informative descriptions throughout

## 🌟 Special Touches

### **Welcoming Atmosphere**
- Calming color palette
- Soft, reassuring language
- Celebratory emojis and icons
- Encouraging messages
- Professional medical disclaimer

### **Educational Content**
- Week-by-week development information
- Size comparisons with familiar objects
- Key developmental milestones
- Trimester overviews
- Important date markers

### **Visual Delight**
- Gradient backgrounds
- Glassmorphism effects
- Custom styled scrollbar
- Beautiful typography
- Consistent spacing and alignment

## 📋 File Structure

```
pregnancy-calculator/
├── pregnancy-calculator.html    # Main HTML file
├── pregnancy-styles.css         # All styling and animations
├── pregnancy-script.js          # Calculation logic and interactions
└── PREGNANCY_README.md          # This documentation
```

## 🔧 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Opera (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Optimization

- Touch-friendly buttons and inputs
- Optimized font sizes for readability
- Stacked layouts on small screens
- Fast loading times
- Native date pickers on mobile devices

## 🎓 Perfect For

- Personal use by expectant mothers
- Healthcare provider websites
- Pregnancy blogs and forums
- Medical education sites
- Family planning resources

## ⚠️ Medical Disclaimer

This calculator provides estimates based on standard calculations. Every pregnancy is unique, and dates may vary. Always consult with your healthcare provider for:
- Accurate due date determination
- Medical advice and guidance
- Pregnancy monitoring and care
- Any concerns or questions

## 💡 Tips for Accurate Results

1. **Know Your LMP**: The first day of your last period is most accurate
2. **Track Your Cycle**: Understanding your cycle length improves accuracy
3. **Ultrasound Dating**: Most accurate, especially in first trimester
4. **Consult Your Doctor**: Always confirm with healthcare provider
5. **Remember**: Only 5% of babies arrive on their exact due date!

## 🎨 Design Philosophy

The design focuses on creating a stress-free, pleasant experience:
- **Calming**: Soft colors reduce anxiety
- **Clear**: Easy-to-understand information
- **Supportive**: Encouraging language and visuals
- **Professional**: Medical accuracy with warmth
- **Beautiful**: Celebrates the journey of pregnancy

## 🌸 Color Psychology

Colors were chosen for their psychological effects:
- **Pink**: Nurturing, loving, calming
- **Peach**: Warm, friendly, welcoming
- **White**: Pure, clean, peaceful
- **Lavender**: Soothing, gentle, calming

## ✨ Animations Guide

All animations are smooth and subtle:
- **Duration**: 0.3-0.8 seconds
- **Easing**: Ease-out for natural movement
- **Purpose**: Guide attention, provide feedback
- **Performance**: Hardware-accelerated for smoothness

## 🎯 Accessibility Features

- Clear color contrast ratios
- Large, readable fonts
- Descriptive labels for all inputs
- Keyboard-friendly navigation
- Screen reader compatible
- Touch targets meet size guidelines

---

**Made with 💕 for all the amazing moms-to-be**

Congratulations on your pregnancy journey! 🤰✨

## 🙏 Acknowledgments

Created with love and care for expectant mothers everywhere. May your pregnancy journey be beautiful, healthy, and filled with joy!

---

*This tool is designed to complement, not replace, professional medical advice.*
