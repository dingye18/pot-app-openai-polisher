var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var HTTP_ERROR_CODES = {
    400: "Bad Request",
    401: "Unauthorized",
    402: "Payment Required",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    406: "Not Acceptable",
    407: "Proxy Authentication Required",
    408: "Request Timeout",
    409: "Conflict",
    410: "Gone",
    411: "Length Required",
    412: "Precondition Failed",
    413: "Payload Too Large",
    414: "URI Too Long",
    415: "Unsupported Media Type",
    416: "Range Not Satisfiable",
    417: "Expectation Failed",
    418: "I'm a teapot",
    421: "Misdirected Request",
    422: "Unprocessable Entity",
    423: "Locked",
    424: "Failed Dependency",
    425: "Too Early",
    426: "Upgrade Required",
    428: "Precondition Required",
    429: "请求过于频繁，请慢一点。OpenAI 对您在 API 上的请求实施速率限制。或是您的 API credits 已超支，需要充值。好消息是您仍然可以使用官方的 Web 端聊天页面",
    431: "Request Header Fields Too Large",
    451: "Unavailable For Legal Reasons",
    500: "Internal Server Error",
    501: "Not Implemented",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout",
    505: "HTTP Version Not Supported",
    506: "Variant Also Negotiates",
    507: "Insufficient Storage",
    508: "Loop Detected",
    510: "Not Extended",
    511: "Network Authentication Required"
};
var DEFAULT_PROMPT = {
    simplicity: "Revise the following sentences to make them more clear, concise, and coherent.",
    detailed: ". Please note that you need to list the changes and briefly explain why",
};
var languageMapping = {
    "zh-Hant": {
        prompt: "潤色此句",
        detailed: "。請列出修改項目，並簡述修改原因",
    },
    "zh-Hans": {
        prompt: "润色此句",
        detailed: "。请注意要列出更改以及简要解释一下为什么这么修改",
    },
    "ja": {
        prompt: "この文章を装飾する",
        detailed: "。変更点をリストアップし、なぜそのように変更したかを簡単に説明することに注意してください",
    },
    "ru": {
        prompt: "Переформулируйте следующие предложения, чтобы они стали более ясными, краткими и связными",
        detailed: ". Пожалуйста, обратите внимание на необходимость перечисления изменений и краткого объяснения причин таких изменений",
    },
    "wyw": {
        prompt: "润色此句古文",
        detailed: "。请注意要列出更改以及简要解释一下为什么这么修改",
    },
    "yue": {
        prompt: "潤色呢句粵語",
        detailed: "。記住要列出修改嘅內容同簡單解釋下點解要做呢啲更改",
    },
};

function buildHeader(isAzureServiceProvider, apiKey) {
    var _a;
    return _a = {
            "Content-Type": "application/json"
        },
        _a[isAzureServiceProvider ? "api-key" : "Authorization"] = isAzureServiceProvider ? apiKey : "Bearer ".concat(apiKey),
        _a;
}

function ensureHttpsAndNoTrailingSlash(url) {
    var hasProtocol = /^[a-z]+:\/\//i.test(url);
    var modifiedUrl = hasProtocol ? url : "https://" + url;
    return modifiedUrl.endsWith("/") ? modifiedUrl.slice(0, -1) : modifiedUrl;
}

function replacePromptKeywords(prompt, text, from, to) {
    if (!prompt)
        return prompt;
    return prompt
        .replace("$text", text)
        .replace("$sourceLang", from)
        .replace("$targetLang", to);
}

var generateSystemPrompt = function (basePrompt, polishingMode, from) {
    var isDetailedPolishingMode = polishingMode === "detailed";
    var promptInfo = languageMapping[from] || {
        prompt: DEFAULT_PROMPT.simplicity,
        detailed: DEFAULT_PROMPT.detailed,
    };
    var systemPrompt = basePrompt || promptInfo.prompt;
    if (isDetailedPolishingMode) {
        systemPrompt += promptInfo.detailed;
    }
    return systemPrompt;
};

var option = {
    customSystemPrompt: "Revise the following sentences with academic writing styles to make them more clear, concise, and coherent. Please keep the original latex format and do not change the meaning of the text.",
    customUserPrompt: "$text",
    polishingMode: "simplicity", // or "detailed"
};

var buildRequestBody = function (model, text, from, to) {
    var customSystemPrompt = option.customSystemPrompt, customUserPrompt = option.customUserPrompt, polishingMode = option.polishingMode;
    var systemPrompt = generateSystemPrompt(replacePromptKeywords(customSystemPrompt, text, from, to), polishingMode, from);
    var userPrompt = customUserPrompt
        ? "".concat(replacePromptKeywords(customUserPrompt, text, from, to), ":\n\n\"").concat(text, "\"")
        : text;
    var standardBody = {
        model: model,
        temperature: 0.2,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 1,
        presence_penalty: 1,
    };
    return __assign(__assign({}, standardBody), { model: model, messages: [
            {
                role: "system",
                content: systemPrompt,
            },
            {
                role: "user",
                content: userPrompt,
            },
        ] });
};

var handleStreamResponse = function (targetText, textFromResponse) {
    var _a, _b;
    if (textFromResponse !== '[DONE]') {
        try {
            var dataObj = JSON.parse(textFromResponse);
            // https://github.com/openai/openai-node/blob/master/src/resources/chat/completions#L190
            var choices = dataObj.choices;
            var delta = (_b = (_a = choices[0]) === null || _a === void 0 ? void 0 : _a.delta) === null || _b === void 0 ? void 0 : _b.content;
            if (delta) {
                targetText += delta;
            }
        }
        catch (error) {
            if (isServiceError(error)) {
                throw new Error("Service Error: ".concat(error.message, " - ").concat(error.addition || ""));
            }
            else {
                throw new Error("JSON Parse Error: ".concat(error.message, " - ").concat(textFromResponse));
            }
        }
    }
    return targetText;
};

var handleGeneralResponse = function (result) {
    var _a;
    var choices = result.data.choices;
    if (!choices || choices.length === 0) {
        throw new Error("No choices found in the response");
        return;
    }
    var targetText = (_a = choices[0].message.content) === null || _a === void 0 ? void 0 : _a.trim();
    // 使用正则表达式删除字符串开头和结尾的特殊字符
    targetText = targetText === null || targetText === void 0 ? void 0 : targetText.replace(/^(『|「|"|“)|(』|」|"|”)$/g, "");
    // 判断并删除字符串末尾的 `" =>`
    if (targetText === null || targetText === void 0 ? void 0 : targetText.endsWith('" =>')) {
        targetText = targetText.slice(0, -4);
    }
    if (!targetText || targetText.trim() === "") {
        throw new Error("Empty response content");
    }
    return targetText;
};

async function translate(text, from, to, options) {
    const { config, detect, setResult, utils } = options;
    const { http, readBinaryFile, readTextFile, Database, CryptoJS, run, cacheDir, pluginDir, osType } = utils;
    const { tauriFetch: fetch} = utils;
    const {ResponseType} = http;
    const { requestPath, apiKey, model } = config;
    

    if (!requestPath || !apiKey) {
        throw "Missing required configuration: requestPath or apiKey";
    } 
    const apiUrl = requestPath.startsWith("http") ? requestPath : `https://${requestPath}`;

    var baseUrl = ensureHttpsAndNoTrailingSlash(apiUrl || "https://api.openai.com");
    var apiUrlPath = baseUrl.includes("gateway.ai.cloudflare.com") ? "/chat/completions" : "/v1/chat/completions";
    var modelValue = model ? model : "GPT-4.1";
    const isAzureServiceProvider = baseUrl.includes("azure.com");

    var header = buildHeader(isAzureServiceProvider, apiKey);
    var body = buildRequestBody(modelValue, text, from, to);
    var targetText = ""; // 初始化拼接结果变量
    var buffer = ""; // 新增 buffer 变量
    (function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!Number(stream)) return [3 /*break*/, 2];
                    return [4 /*yield*/, $http.streamRequest({
                            method: "POST",
                            url: baseUrl + apiUrlPath,
                            header: header,
                            body: __assign(__assign({}, body), { stream: true }),
                            //cancelSignal: query.cancelSignal,
                            streamHandler: function (streamData) {
                                var _a;
                                if ((_a = streamData.text) === null || _a === void 0 ? void 0 : _a.includes("Invalid token")) {
                                    // 如果返回的文本包含 "Invalid token"，则抛出错误
                                    throw new Error("Invalid token. Please check your API key.");
                                }
                                else if (streamData.text !== undefined) {
                                    // 将新的数据添加到缓冲变量中
                                    buffer += streamData.text;
                                    // 检查缓冲变量是否包含一个完整的消息
                                    while (true) {
                                        var match = buffer.match(/data: (.*?})\n/);
                                        if (match) {
                                            // 如果是一个完整的消息，处理它并从缓冲变量中移除
                                            var textFromResponse = match[1].trim();
                                            
                                            targetText = handleStreamResponse(query, targetText, textFromResponse);
                                            buffer = buffer.slice(match[0].length);
                                        }
                                        else {
                                            // 如果没有完整的消息，等待更多的数据
                                            break;
                                        }
                                    }
                                }
                            },
                            handler: function (result) {
                                if (result.response.statusCode >= 400) {
                                    throw new Error(`HTTP Error: ${result.response.statusCode} - ${result.response.statusMessage}`);
                                }
                                else {
                                    return targetText;
                                }
                            }
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, $http.request({
                        method: "POST",
                        url: baseUrl + apiUrlPath,
                        header: header,
                        body: body,
                    })];
                case 3:
                    result = _a.sent();
                    if (result.error) {
                        throw new Error(`Request Error: ${result.error.message} - ${result.error.addition}`);
                    }
                    else {
                        targetText = handleGeneralResponse(result);
                    }
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }); })().catch(function (error) {
        throw new Error(`Translation failed: ${error.message}`);
    });

    return targetText;
}
