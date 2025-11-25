// ===== State Management =====
let calculationResult = null;

// ===== DOM Elements =====
const calculatorForm = document.getElementById('calculatorForm');
const lmpDateInput = document.getElementById('lmpDate');
const cycleLengthInput = document.getElementById('cycleLength');
const conceptionDateInput = document.getElementById('conceptionDate');
const ultrasoundDateInput = document.getElementById('ultrasoundDate');
const ultrasoundWeeksInput = document.getElementById('ultrasoundWeeks');
const ultrasoundDaysInput = document.getElementById('ultrasoundDays');
const resultsSection = document.getElementById('resultsSection');
const conceptionGroup = document.getElementById('conceptionGroup');
const ultrasoundGroup = document.getElementById('ultrasoundGroup');

// Result display elements
const dueDateElement = document.getElementById('dueDate');
const dueDateTextElement = document.getElementById('dueDateText');
const currentWeekElement = document.getElementById('currentWeek');
const trimesterTextElement = document.getElementById('trimesterText');
const daysRemainingElement = document.getElementById('daysRemaining');
const daysRemainingTextElement = document.getElementById('daysRemainingText');
const conceptionWindowElement = document.getElementById('conceptionWindow');
const timelineElement = document.getElementById('timeline');
const weeklyInfoSection = document.getElementById('weeklyInfo');

// ===== Weekly Development Data =====
const weeklyDevelopment = {
    1: {
        emoji: '🫘',
        size: 'A tiny cluster of cells',
        description: 'Your pregnancy journey begins! Though you might not even know it yet, conception is happening or about to happen.',
        developments: [
            'The fertilized egg begins its journey to the uterus',
            'Cell division is rapidly occurring',
            'Your body is preparing for implantation'
        ]
    },
    4: {
        emoji: '🫘',
        size: 'A poppy seed',
        description: 'Your baby is now an embryo! The tiny ball of cells is officially implanted in your uterine lining.',
        developments: [
            'The amniotic sac is forming around the embryo',
            'The placenta is beginning to develop',
            'Primitive circulatory system is forming',
            'Neural tube development begins'
        ]
    },
    8: {
        emoji: '🫐',
        size: 'A raspberry',
        description: 'Your baby is now about the size of a raspberry and starting to look more human!',
        developments: [
            'Tiny fingers and toes are beginning to form',
            'Eyelids and ears are forming',
            'The heart is beating at about 150-170 beats per minute',
            'All major organs have begun to form',
            'Baby is moving, though you can\'t feel it yet'
        ]
    },
    12: {
        emoji: '🍋',
        size: 'A lime',
        description: 'You\'re nearing the end of the first trimester! Your baby\'s features are becoming more defined.',
        developments: [
            'Fingernails and toenails are forming',
            'Baby can open and close fingers',
            'The digestive system is practicing contractions',
            'Bones are beginning to harden',
            'Reflexes are developing'
        ]
    },
    16: {
        emoji: '🥑',
        size: 'An avocado',
        description: 'Welcome to the second trimester! Your baby is growing rapidly and becoming more active.',
        developments: [
            'Baby can hear your voice and heartbeat',
            'Eyes are moving and responding to light',
            'Baby is developing unique fingerprints',
            'The nervous system is functioning',
            'You might start feeling those first flutters!'
        ]
    },
    20: {
        emoji: '🍌',
        size: 'A banana',
        description: 'You\'re halfway there! This is often when you\'ll have your anatomy scan.',
        developments: [
            'Baby is swallowing amniotic fluid',
            'Hair is growing on the head',
            'Vernix (protective coating) covers the skin',
            'Baby can hear sounds from outside the womb',
            'Regular sleep and wake cycles are developing'
        ]
    },
    24: {
        emoji: '🌽',
        size: 'An ear of corn',
        description: 'Your baby is viable! With specialized care, baby could survive if born now.',
        developments: [
            'Lungs are developing rapidly',
            'Baby\'s skin is still translucent',
            'Taste buds are forming',
            'Brain development is accelerating',
            'Baby responds to your touch through the belly'
        ]
    },
    28: {
        emoji: '🥥',
        size: 'A large eggplant',
        description: 'Welcome to the third trimester! Your baby is putting on weight and getting stronger.',
        developments: [
            'Eyes can open and close',
            'Baby can recognize your voice',
            'Bones are fully formed (but still soft)',
            'Baby is practicing breathing movements',
            'More fat is accumulating for warmth'
        ]
    },
    32: {
        emoji: '🥥',
        size: 'A jicama',
        description: 'Your baby is getting ready for birth! Most systems are well-developed now.',
        developments: [
            'Baby is gaining about half a pound per week',
            'Lungs are maturing rapidly',
            'Baby is likely head-down now',
            'All five senses are working',
            'Immune system is developing'
        ]
    },
    36: {
        emoji: '🎃',
        size: 'A honeydew melon',
        description: 'You\'re in the home stretch! Baby is considered early term at 37 weeks.',
        developments: [
            'Baby is shedding vernix coating',
            'Skull bones are not yet fused (for birth)',
            'Baby is practicing for life outside',
            'Most organs are ready for birth',
            'Baby is gaining about an ounce per day'
        ]
    },
    40: {
        emoji: '🍉',
        size: 'A watermelon',
        description: 'Your due date is here! Your baby is ready to meet you!',
        developments: [
            'Baby is fully developed and ready for birth',
            'The placenta is providing antibodies',
            'Baby has about 15% body fat',
            'Your baby is ready to breathe on their own',
            'Get ready to meet your little one!'
        ]
    }
};

// ===== Date Formatting Utility =====
function formatDate(date, format = 'long') {
    const options = format === 'long' 
        ? { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        : { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function formatDateShort(date) {
    return formatDate(date, 'short');
}

// ===== Calculation Functions =====
function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function calculateDaysBetween(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.round((date2 - date1) / oneDay);
}

function calculateDueDateFromLMP(lmpDate, cycleLength = 28) {
    // Naegele's Rule: Add 280 days to LMP, adjusted for cycle length
    const adjustment = cycleLength - 28;
    const daysToAdd = 280 + adjustment;
    return addDays(lmpDate, daysToAdd);
}

function calculateDueDateFromConception(conceptionDate) {
    // Add 266 days (38 weeks) from conception
    return addDays(conceptionDate, 266);
}

function calculateDueDateFromUltrasound(ultrasoundDate, weeks, days) {
    // Calculate how many days pregnant at ultrasound
    const daysPregnant = (weeks * 7) + days;
    // 280 days total - days already pregnant = days remaining
    const daysRemaining = 280 - daysPregnant;
    return addDays(ultrasoundDate, daysRemaining);
}

function calculateConceptionWindow(lmpDate, cycleLength = 28) {
    // Ovulation typically occurs 14 days before the next period
    const ovulationDay = cycleLength - 14;
    const conceptionStart = addDays(lmpDate, ovulationDay - 2);
    const conceptionEnd = addDays(lmpDate, ovulationDay + 2);
    return { start: conceptionStart, end: conceptionEnd };
}

function calculateCurrentWeek(lmpDate, today = new Date()) {
    const daysSinceLMP = calculateDaysBetween(lmpDate, today);
    const weeks = Math.floor(daysSinceLMP / 7);
    const days = daysSinceLMP % 7;
    return { weeks, days, totalDays: daysSinceLMP };
}

function getTrimester(weeks) {
    if (weeks <= 13) return { number: 1, name: 'First Trimester' };
    if (weeks <= 27) return { number: 2, name: 'Second Trimester' };
    return { number: 3, name: 'Third Trimester' };
}

// ===== Event Listeners =====
// Toggle between calculation methods
document.querySelectorAll('input[name="calcMethod"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        const method = e.target.value;
        
        // Hide all conditional groups
        conceptionGroup.style.display = 'none';
        ultrasoundGroup.style.display = 'none';
        lmpDateInput.parentElement.style.display = 'flex';
        cycleLengthInput.parentElement.style.display = 'flex';
        
        // Show relevant group
        if (method === 'conception') {
            conceptionGroup.style.display = 'flex';
            lmpDateInput.parentElement.style.display = 'none';
            cycleLengthInput.parentElement.style.display = 'none';
        } else if (method === 'ultrasound') {
            ultrasoundGroup.style.display = 'flex';
            lmpDateInput.parentElement.style.display = 'none';
            cycleLengthInput.parentElement.style.display = 'none';
        }
    });
});

// Form submission
calculatorForm.addEventListener('submit', (e) => {
    e.preventDefault();
    calculateAndDisplayResults();
});

// ===== Main Calculation Function =====
function calculateAndDisplayResults() {
    const method = document.querySelector('input[name="calcMethod"]:checked').value;
    let dueDate, lmpDate, conceptionWindow;
    
    try {
        if (method === 'lmp') {
            lmpDate = new Date(lmpDateInput.value);
            const cycleLength = parseInt(cycleLengthInput.value);
            
            if (!lmpDateInput.value) {
                alert('Please enter your last menstrual period date.');
                return;
            }
            
            dueDate = calculateDueDateFromLMP(lmpDate, cycleLength);
            conceptionWindow = calculateConceptionWindow(lmpDate, cycleLength);
            
        } else if (method === 'conception') {
            const conceptionDate = new Date(conceptionDateInput.value);
            
            if (!conceptionDateInput.value) {
                alert('Please enter your conception/ovulation date.');
                return;
            }
            
            dueDate = calculateDueDateFromConception(conceptionDate);
            // Calculate LMP by subtracting typical time to conception
            lmpDate = addDays(conceptionDate, -14);
            conceptionWindow = { start: conceptionDate, end: conceptionDate };
            
        } else if (method === 'ultrasound') {
            const ultrasoundDate = new Date(ultrasoundDateInput.value);
            const weeks = parseInt(ultrasoundWeeksInput.value) || 0;
            const days = parseInt(ultrasoundDaysInput.value) || 0;
            
            if (!ultrasoundDateInput.value || weeks === 0) {
                alert('Please enter ultrasound date and gestational age.');
                return;
            }
            
            dueDate = calculateDueDateFromUltrasound(ultrasoundDate, weeks, days);
            // Calculate approximate LMP
            const totalDaysPregnant = (weeks * 7) + days;
            lmpDate = addDays(ultrasoundDate, -totalDaysPregnant);
            conceptionWindow = calculateConceptionWindow(lmpDate);
        }
        
        // Calculate current stats
        const today = new Date();
        const currentWeek = calculateCurrentWeek(lmpDate, today);
        const trimester = getTrimester(currentWeek.weeks);
        const daysRemaining = calculateDaysBetween(today, dueDate);
        
        // Store results
        calculationResult = {
            dueDate,
            lmpDate,
            conceptionWindow,
            currentWeek,
            trimester,
            daysRemaining
        };
        
        // Display results
        displayResults(calculationResult);
        
        // Scroll to results
        setTimeout(() => {
            resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
        
    } catch (error) {
        console.error('Calculation error:', error);
        alert('There was an error with your inputs. Please check and try again.');
    }
}

// ===== Display Results =====
function displayResults(result) {
    // Due Date
    dueDateElement.textContent = formatDate(result.dueDate);
    dueDateTextElement.textContent = `Your baby's expected arrival`;
    
    // Current Week
    currentWeekElement.textContent = `${result.currentWeek.weeks} weeks ${result.currentWeek.days} days`;
    trimesterTextElement.textContent = result.trimester.name;
    
    // Days Remaining
    if (result.daysRemaining >= 0) {
        daysRemainingElement.textContent = result.daysRemaining;
        daysRemainingTextElement.textContent = result.daysRemaining === 1 ? 'day remaining!' : 'days remaining!';
    } else {
        daysRemainingElement.textContent = Math.abs(result.daysRemaining);
        daysRemainingTextElement.textContent = 'days past due date';
    }
    
    // Conception Window
    conceptionWindowElement.textContent = 
        `${formatDateShort(result.conceptionWindow.start)} - ${formatDateShort(result.conceptionWindow.end)}`;
    
    // Display Timeline
    displayTimeline(result);
    
    // Display Weekly Information
    displayWeeklyInfo(result.currentWeek.weeks);
    
    // Highlight Active Trimester
    highlightActiveTrimester(result.trimester.number);
    
    // Show results section
    resultsSection.classList.add('show');
}

// ===== Display Timeline =====
function displayTimeline(result) {
    const milestones = [
        { date: result.lmpDate, label: 'Last Menstrual Period' },
        { date: result.conceptionWindow.start, label: 'Conception Window' },
        { date: addDays(result.lmpDate, 7 * 12), label: 'End of First Trimester' },
        { date: addDays(result.lmpDate, 7 * 20), label: 'Halfway Point (20 weeks)' },
        { date: addDays(result.lmpDate, 7 * 24), label: 'Viability (24 weeks)' },
        { date: addDays(result.lmpDate, 7 * 28), label: 'Third Trimester Begins' },
        { date: addDays(result.lmpDate, 7 * 37), label: 'Full Term (37 weeks)' },
        { date: result.dueDate, label: 'Estimated Due Date' }
    ];
    
    timelineElement.innerHTML = '';
    
    milestones.forEach(milestone => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        
        const today = new Date();
        const isPast = milestone.date < today;
        const isFuture = milestone.date > today;
        
        if (isPast) {
            item.style.opacity = '0.6';
        }
        
        item.innerHTML = `
            <div class="timeline-date">${formatDate(milestone.date)}</div>
            <div class="timeline-label">${milestone.label} ${isPast ? '✓' : ''}</div>
        `;
        
        timelineElement.appendChild(item);
    });
}

// ===== Display Weekly Information =====
function displayWeeklyInfo(weekNumber) {
    // Find the closest week with data
    let closestWeek = 1;
    const availableWeeks = Object.keys(weeklyDevelopment).map(Number).sort((a, b) => a - b);
    
    for (let i = 0; i < availableWeeks.length; i++) {
        if (weekNumber >= availableWeeks[i]) {
            closestWeek = availableWeeks[i];
        }
    }
    
    const weekData = weeklyDevelopment[closestWeek];
    
    if (weekData) {
        document.getElementById('sizeEmoji').textContent = weekData.emoji;
        document.getElementById('sizeText').textContent = `About the size of: ${weekData.size}`;
        document.getElementById('weekTitle').textContent = `Week ${weekNumber}`;
        document.getElementById('weekDescription').textContent = weekData.description;
        
        const developmentList = document.getElementById('developmentList');
        developmentList.innerHTML = '';
        
        weekData.developments.forEach(dev => {
            const li = document.createElement('li');
            li.textContent = dev;
            developmentList.appendChild(li);
        });
    }
}

// ===== Highlight Active Trimester =====
function highlightActiveTrimester(trimesterNumber) {
    // Remove active class from all
    document.querySelectorAll('.trimester-card').forEach(card => {
        card.classList.remove('active');
    });
    
    // Add active class to current trimester
    const activeCard = document.getElementById(`trimester${trimesterNumber}`);
    if (activeCard) {
        activeCard.classList.add('active');
    }
}

// ===== Set Default Date =====
function setDefaultDate() {
    // Set default LMP to approximately 8 weeks ago (common time for first calculation)
    const today = new Date();
    const defaultLMP = addDays(today, -56); // 8 weeks ago
    lmpDateInput.value = defaultLMP.toISOString().split('T')[0];
    
    // Set max date to today for all date inputs
    const todayString = today.toISOString().split('T')[0];
    lmpDateInput.max = todayString;
    conceptionDateInput.max = todayString;
    ultrasoundDateInput.max = todayString;
}

// ===== Initialization =====
window.addEventListener('DOMContentLoaded', () => {
    setDefaultDate();
    
    // Add smooth entrance animations
    const cards = document.querySelectorAll('.form-group');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// ===== Input Validation =====
cycleLengthInput.addEventListener('input', (e) => {
    const value = parseInt(e.target.value);
    if (value < 21) e.target.value = 21;
    if (value > 35) e.target.value = 35;
});

ultrasoundWeeksInput.addEventListener('input', (e) => {
    const value = parseInt(e.target.value);
    if (value < 0) e.target.value = 0;
    if (value > 42) e.target.value = 42;
});

ultrasoundDaysInput.addEventListener('input', (e) => {
    const value = parseInt(e.target.value);
    if (value < 0) e.target.value = 0;
    if (value > 6) e.target.value = 6;
});
