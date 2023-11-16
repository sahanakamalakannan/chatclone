document.addEventListener('DOMContentLoaded', function () {
    const chatHistoryWidgetsSection = document.querySelector('.chat_history_widgets_section');

    // Function to remove the chat history widget
    function removeChatHistoryWidget(widget) {
        widget.remove();
    }

    // Event delegation to handle delete option clicks
    chatHistoryWidgetsSection.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete_option')) {
            const chatWidget = event.target.closest('.single_chat_history_widget');
            if (chatWidget) {
                removeChatHistoryWidget(chatWidget);
            }
        }
    });

    // Function to add a new chat history widget item
    function addChatHistoryWidget() {
        // Create a new chat history widget item
        const newChatWidget = document.createElement('div');
        newChatWidget.classList.add('single_chat_history_widget');

        // ... (rest of your code to set up the chat history widget)
        newChatWidget.innerHTML = `
        <div class="single_chat_history_widget">
            <div class="chat_icon">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 435.244 435.244"
                    fill="#FFFFFF" <!-- Change fill color to match chat_title color -->
                >
                    <path
                        d="M75.146,425.343v-96.354C27.281,294.43,0,244.745,0,191.603C0,91.414,97.624,9.901,217.622,9.901s217.622,81.513,217.622,181.701c0,100.186-97.624,181.701-217.622,181.701c-14.218,0-28.533-1.189-42.631-3.539L75.146,425.343z M217.622,39.177c-103.854,0-188.346,68.379-188.346,152.425c0,45.561,25.014,88.418,68.636,117.568l6.504,4.346v62.022l65.497-36.452l5.2,0.973c14.021,2.63,28.321,3.968,42.508,3.968c103.856,0,188.346-68.376,188.346-152.425C405.968,107.556,321.479,39.177,217.622,39.177z"
                    ></path>
                </svg>
            </div>
            <div class="chat_title">
                New Chat
            </div>
            <div class="edit_delete_options">
                <div class="edit_option">
                    <svg
                            xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="#FFFFFF" <!-- Change fill color to match chat_title color -->
                                >
                                <path
                                    d="M20.71 5.71l-2.42-2.42c-0.39-0.39-1.02-0.39-1.41 0l-1.15 1.15l3.52 3.52l1.15-1.15c0.4-0.39 0.4-1.02 0.01-1.4zM13 10.85l-8.05 8.05c-0.59 0.59-0.59 1.54 0 2.12l3.05 3.05c0.59 0.59 1.54 0.59 2.12 0l8.05-8.05L13 10.85zM2.12 17.27c-0.39 0.39-0.39 1.02 0 1.41l1.85 1.85c0.2 0.2 0.46 0.3 0.71 0.3s0.51-0.1 0.71-0.29l8.04-8.04l-3.53-3.54l-8.04 8.04z"
                                ></path>
                    </svg>   
                </div>
                <div class="delete_option">
                    <svg fill="#FFFFFF" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                            width="18" height="18" viewBox="0 0 482.428 482.429" xml:space="preserve">
                        <g>
                        <g>
                            <path d="M381.163,57.799h-75.094C302.323,25.316,274.686,0,241.214,0c-33.471,0-61.104,25.315-64.85,57.799h-75.098
                            c-30.39,0-55.111,24.728-55.111,55.117v2.828c0,23.223,14.46,43.1,34.83,51.199v260.369c0,30.39,24.724,55.117,55.112,55.117
                            h210.236c30.389,0,55.111-24.729,55.111-55.117V166.944c20.369-8.1,34.83-27.977,34.83-51.199v-2.828
                            C436.274,82.527,411.551,57.799,381.163,57.799z M241.214,26.139c19.037,0,34.927,13.645,38.443,31.66h-76.879
                            C206.293,39.783,222.184,26.139,241.214,26.139z M375.305,427.312c0,15.978-13,28.979-28.973,28.979H136.096
                            c-15.973,0-28.973-13.002-28.973-28.979V170.861h268.182V427.312z M410.135,115.744c0,15.978-13,28.979-28.973,28.979H101.266
                            c-15.973,0-28.973-13.001-28.973-28.979v-2.828c0-15.978,13-28.979,28.973-28.979h279.897c15.973,0,28.973,13.001,28.973,28.979
                            V115.744z"/>
                            <path d="M171.144,422.863c7.218,0,13.069-5.853,13.069-13.068V262.641c0-7.216-5.852-13.07-13.069-13.07
                            c-7.217,0-13.069,5.854-13.069,13.07v147.154C158.074,417.012,163.926,422.863,171.144,422.863z"/>
                            <path d="M241.214,422.863c7.218,0,13.07-5.853,13.07-13.068V262.641c0-7.216-5.854-13.07-13.07-13.07
                            c-7.217,0-13.069,5.854-13.069,13.07v147.154C228.145,417.012,233.996,422.863,241.214,422.863z"/>
                            <path d="M311.284,422.863c7.217,0,13.068-5.853,13.068-13.068V262.641c0-7.216-5.852-13.07-13.068-13.07
                            c-7.219,0-13.07,5.854-13.07,13.07v147.154C298.213,417.012,304.067,422.863,311.284,422.863z"/>
                        </g>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
        `;

        // Add event listener to the delete option in the new widget
        const deleteOption = newChatWidget.querySelector('.delete_option');
        deleteOption.addEventListener('click', function (event) {
            removeChatHistoryWidget(newChatWidget);
            event.stopPropagation(); // Prevent event from bubbling up and triggering parent event listener
        });

        // Append the new chat history widget item to the chat history widgets section
        //chatHistoryWidgetsSection.appendChild(newChatWidget);
        // Insert the new chat history widget item at the beginning of the chat history widgets section
        chatHistoryWidgetsSection.insertBefore(newChatWidget, chatHistoryWidgetsSection.firstChild);
    }

    // Event listener to add a new chat history widget when needed
    const newChatButton = document.querySelector('.new_chat_button');
    newChatButton.addEventListener('click', addChatHistoryWidget);

    const sendIcon = document.querySelector('.send-icon');
    sendIcon.addEventListener('click', function() {
        // Retrieve the message input content
        const messageInput = document.querySelector('.message-input');
        const messageContent = messageInput.value.trim(); // Get the trimmed message content

        if (messageContent !== '') {
            // Create a message card only if the input is not empty
            createMessageCard(messageContent);

            // Clear the message input after sending the message
            messageInput.value = '';
        }
    });
});

// Function to toggle the sidebar
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const mainSection = document.querySelector('.main_section');
    const closeSidebarButton = document.querySelector('.close_sidebar_button');

    if (sidebar.style.width === '0px' || sidebar.style.width === '') {
        sidebar.style.width = '20%'; // Set the sidebar width to its original width
        mainSection.style.width = '80%'; // Set the main section width to take up the rest
        closeSidebarButton.style.transform = 'rotate(0deg)'; // Reset button icon
    } else {
        sidebar.style.width = '0'; // Collapse the sidebar to the left
        mainSection.style.width = '100%'; // Expand the main section to take up the whole space
        closeSidebarButton.style.transform = 'rotate(180deg)'; // Rotate button icon
    }
}

// Function to create a new message card with user input content
function createMessageCard(messageContent) {
    const messagesSection = document.querySelector('.messages_section');

    // Create a new message card element
    const messageCard = document.createElement('div');
    messageCard.classList.add('message-card');

    // Set the content of the message card
    messageCard.textContent = messageContent;

    // Append the message card to the messages section
    messagesSection.appendChild(messageCard);
}
