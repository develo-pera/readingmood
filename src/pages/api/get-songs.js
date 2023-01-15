import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateAction = async (req, res) => {
  const bookInfoPrompt = `Are you familiar with the book "${req.body.userInput}". Just answer with yes or no as json object with field named familiar and values as boolean style.`
  const firstCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: bookInfoPrompt,
    temperature: 0.7,
    max_tokens: 1250,
  });
  const bookInfoPromptOutput = firstCompletion.data.choices.pop();
  const familiarBook = JSON.parse(bookInfoPromptOutput.text).familiar;
  const { existingBook } = JSON.parse(`{"existingBook": ${familiarBook}}`);

  if (!existingBook) {
    return res.status(200).json({existing: existingBook, output: ""});
  }

  const songsPrompt = `Recommend me five songs which aligns with the themes of the book "${req.body.userInput}", after you finish listing songs write short explanation for each song from the list why it align with the theme of the book. Recommended songs preferably won't be official soundtracks. Return it as an json object with array named list of objects with three fields songTitle, artist and description. Filed names should be wrapped with double quote. Field songTitle should contain only title, not who's the artist.`;

  const baseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: songsPrompt,
    temperature: 0.7,
    max_tokens: 1250,
  });

  const promptOutput = baseCompletion.data.choices.pop();
  res.status(200).json({existing: existingBook, output: promptOutput});
};

export default generateAction;