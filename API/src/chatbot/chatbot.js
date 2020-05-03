const dialogflow = require('dialogflow');
const uuid = require('uuid');
const sessionId = uuid.v4();

module.exports = {
/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
    async runSample(textInput, projectId = 'fey-jberbm') {
    // A unique identifier for the given session
        

        // Create a new session
        const sessionClient = new dialogflow.SessionsClient({
            keyFilename: './src/chatbot/functions/service-account.json'
        });
        const sessionPath = sessionClient.sessionPath(projectId, sessionId);

        // The text query request.
        const request = {
            session: sessionPath,
            queryInput: {
            text: {
                // The query to send to the dialogflow agent
                text: textInput,
                // The language used by the client (en-US)
                languageCode: 'pt-BR',
            },
            },
        };

        // Send request and log result
        const responses = await sessionClient.detectIntent(request);
        console.log(responses)
        

        console.log('Detected intent');
        const result = responses[0].queryResult;
        console.log(result.parameters)
        console.log(`  Query: ${result.queryText}`);
        console.log(`  Response: ${result.fulfillmentText}`);
        if (result.intent) {
            console.log(`  Intent: ${result.intent.displayName}`);
        } else {
            console.log(`  No intent matched.`);
        }
        return result.fulfillmentText
    }
}
