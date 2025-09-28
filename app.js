// --- API Constants ---
const GEMINI_TEXT_MODEL = 'gemini-2.5-flash-preview-05-20';
const GEMINI_TTS_MODEL = 'gemini-2.5-flash-preview-tts';
const IMAGEN_MODEL = 'imagen-3.0-generate-002';
const TTS_VOICE = 'Kore';
const DEFAULT_API_KEY = "AIzaSyDupHjWQF6yllhCG5ssbCmr8A2vkPcnp5U";

// --- State ---
let currentMode = 'text';

// --- DOM Elements ---
const apiKeyInput = document.getElementById('api-key-input');
const promptInput = document.getElementById('prompt-input');
const promptLabel = document.getElementById('prompt-label');
const imageInput = document.getElementById('image-input');
const imageUploadArea = document.getElementById('image-upload-area');

const generateButton = document.getElementById('generate-button');
const buttonText = document.getElementById('button-text');
const loadingSpinner = document.getElementById('loading-spinner');

const responseContainer = document.getElementById('response-container');
const imageOutputArea = document.getElementById('image-output-area');
const generatedImage = document.getElementById('generated-image');
const imagePlaceholder = document.getElementById('image-placeholder');

const sourceContainer = document.getElementById('source-container');
const sourceList = document.getElementById('source-list');
const errorMessage = document.getElementById('error-message');

const ttsArea = document.getElementById('tts-area');
const ttsButton = document.getElementById('tts-button');
const ttsButtonText = document.getElementById('tts-button-text');
const ttsLoadingSpinner = document.getElementById('tts-loading-spinner');
const audioPlayer = document.getElementById('audio-player');

const chatPage = document.getElementById('chat-page');
const settingsPage = document.getElementById('settings-page');
const navChat = document.getElementById('nav-chat');
const navSettings = document.getElementById('nav-settings');

// ---------------- Functions ----------------
// switchPage, switchMode, fileToBase64, exponentialBackoffFetch, 
// base64ToArrayBuffer, pcmToWav, handleTTS, handleImageGeneration, 
// handleTextGeneration, handleGeneration
// (copy all from your original <script> exactly here)

// --- Keep your entire JS logic from before inside this file ---
