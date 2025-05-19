
(() => {
    /**
     * =============================================
     * CONSTANTS AND CONFIGURATION
     * =============================================
     */
    
    // Text content options
    const TEXT_OPTIONS = [
        "The text has been changed!",
        "DOM manipulation in action!",
        "JavaScript is powerful!",
        "Content updated successfully.",
        "Dynamic text replacement works!"
    ];
    
    // Original text content
    const ORIGINAL_TEXT = "This text will change when you interact with the buttons below.";
    
    // Color options for style changes
    const COLORS = [
        "#3498db", "#e74c3c", "#2ecc71", "#f39c12", "#9b59b6"
    ];
    
    // Element content options
    const ELEMENT_CONTENT = [
        "New Element Added",
        "Dynamic Content",
        "Created with JavaScript",
        "DOM Element",
        "Interactive Component"
    ];
    
    /**
     * =============================================
     * DOM ELEMENT REFERENCES
     * =============================================
     */
    
    // Text manipulation elements
    const dynamicText = document.getElementById('dynamic-text');
    const changeTextBtn = document.getElementById('change-text-btn');
    const resetTextBtn = document.getElementById('reset-text-btn');
    
    // Style manipulation elements
    const styleTarget = document.getElementById('style-target');
    const applyStylesBtn = document.getElementById('apply-styles-btn');
    const resetStylesBtn = document.getElementById('reset-styles-btn');
    
    // Element manipulation elements
    const elementContainer = document.getElementById('element-container');
    const addElementBtn = document.getElementById('add-element-btn');
    const removeElementBtn = document.getElementById('remove-element-btn');
    const toggleElementsBtn = document.getElementById('toggle-elements-btn');
    
    // Interaction elements
    const interactionDisplay = document.getElementById('interaction-display');
    const logInteractionBtn = document.getElementById('log-interaction-btn');
    const clearLogBtn = document.getElementById('clear-log-btn');
    
    // Footer element
    const currentYear = document.getElementById('current-year');
    
    // State variables
    let elementsVisible = true;
    
    /**
     * =============================================
     * UTILITY FUNCTIONS
     * =============================================
     */
    
    /**
     * Logs an interaction to the display area
     * @param {string} message - The message to log
     */
    function logInteraction(message) {
        const timestamp = new Date().toLocaleTimeString();
        const entry = document.createElement('p');
        entry.innerHTML = `<span class="timestamp">[${timestamp}]</span> ${message}`;
        interactionDisplay.appendChild(entry);
        interactionDisplay.scrollTop = interactionDisplay.scrollHeight;
    }
    
    /**
     * Gets a random item from an array
     * @param {Array} array - The array to select from
     * @returns {*} A random element from the array
     */
    function getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
    
    /**
     * Creates a new DOM element with content
     * @returns {HTMLElement} The created element
     */
    function createNewElement() {
        const element = document.createElement('div');
        element.textContent = getRandomItem(ELEMENT_CONTENT);
        return element;
    }
    
    /**
     * =============================================
     * EVENT HANDLERS
     * =============================================
     */
    
    /**
     * Handles changing the text content
     */
    function handleTextChange() {
        dynamicText.textContent = getRandomItem(TEXT_OPTIONS);
        logInteraction("Changed text content");
    }
    
    /**
     * Handles resetting the text content
     */
    function handleTextReset() {
        dynamicText.textContent = ORIGINAL_TEXT;
        logInteraction("Reset text content");
    }
    
    /**
     * Handles applying random styles
     */
    function handleApplyStyles() {
        styleTarget.style.backgroundColor = getRandomItem(COLORS);
        styleTarget.style.color = '#fff';
        styleTarget.style.padding = '1.5rem';
        styleTarget.style.borderRadius = '10px';
        styleTarget.style.transform = 'rotate(1deg)';
        styleTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        logInteraction("Applied random styles");
    }
    
    /**
     * Handles resetting styles
     */
    function handleResetStyles() {
        styleTarget.removeAttribute('style');
        logInteraction("Reset styles to default");
    }
    
    /**
     * Handles adding a new element
     */
    function handleAddElement() {
        elementContainer.appendChild(createNewElement());
        logInteraction("Added new element");
    }
    
    /**
     * Handles removing the last element
     */
    function handleRemoveElement() {
        if (elementContainer.lastChild) {
            elementContainer.removeChild(elementContainer.lastChild);
            logInteraction("Removed last element");
        } else {
            logInteraction("No elements to remove");
        }
    }
    
    /**
     * Handles toggling elements visibility
     */
    function handleToggleElements() {
        elementsVisible = !elementsVisible;
        elementContainer.style.display = elementsVisible ? 'block' : 'none';
        logInteraction(`Elements ${elementsVisible ? 'shown' : 'hidden'}`);
    }
    
    /**
     * Handles logging a test interaction
     */
    function handleLogInteraction() {
        logInteraction("Button clicked - testing interaction");
    }
    
    /**
     * Handles clearing the interaction log
     */
    function handleClearLog() {
        interactionDisplay.innerHTML = "Your interactions will appear here.";
        logInteraction("Cleared interaction log");
    }
    
    /**
     * =============================================
     * EVENT LISTENERS
     * =============================================
     */
    
    // Text manipulation
    changeTextBtn.addEventListener('click', handleTextChange);
    resetTextBtn.addEventListener('click', handleTextReset);
    
    // Style manipulation
    applyStylesBtn.addEventListener('click', handleApplyStyles);
    resetStylesBtn.addEventListener('click', handleResetStyles);
    
    // Element manipulation
    addElementBtn.addEventListener('click', handleAddElement);
    removeElementBtn.addEventListener('click', handleRemoveElement);
    toggleElementsBtn.addEventListener('click', handleToggleElements);
    
    // Interaction logging
    logInteractionBtn.addEventListener('click', handleLogInteraction);
    clearLogBtn.addEventListener('click', handleClearLog);
    
    /**
     * =============================================
     * INITIALIZATION
     * =============================================
     */
    
    // Set current year in footer
    currentYear.textContent = new Date().getFullYear();
    
    // Initial log message
    logInteraction("Page loaded and ready for interaction!");
})();
