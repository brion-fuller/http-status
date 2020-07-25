export class Status extends Number {
  private _message: string;

  get message() {
    return this._message;
  }

  constructor(status: number, message: string) {
    super(status);
    this._message = message;
  }
}

type _Number = number & { message: string };

// <_Number><unknown> is a hack for fixing issue with typescript and handling Numbers
// https://github.com/microsoft/TypeScript/issues/2361

// 1xx Informational response
export const CONTINUE = <_Number>(<unknown>new Status(100, "Continue"));
export const SWITCHING_PROTOCOLS = <_Number>(
  (<unknown>new Status(101, "Switching Protocols"))
);
export const PROCESSING = <_Number>(<unknown>new Status(102, "Processing")); // https://tools.ietf.org/html/rfcnew Status(251)8
export const EARLY_HINTS = <_Number>(<unknown>new Status(103, "Early Hints")); // https://tools.ietf.org/html/rfcnew Status(829)7

// 2xx Success
export const OK = <_Number>(<unknown>new Status(200, "Ok"));
export const CREATED = <_Number>(<unknown>new Status(201, "Created"));
export const ACCEPTED = <_Number>(<unknown>new Status(202, "Accepted"));
export const NON_AUTHORITATIVE_INFORMATION = <_Number>(
  (<unknown>new Status(203, "Non Authoritative Information"))
);
export const NO_CONTENT = <_Number>(<unknown>new Status(204, "No Content"));
export const RESET_CONTENT = <_Number>(
  (<unknown>new Status(205, "Reset Content"))
);
export const PARTIAL_CONTENT = <_Number>(
  (<unknown>new Status(206, "Partial Content"))
); // https://tools.ietf.org/html/rfcnew Status(723)3
export const MULTI_STATUS = <_Number>(<unknown>new Status(207, "Multi Status")); // https://tools.ietf.org/html/rfcnew Status(491)8
export const ALREADY_REPORTED = <_Number>(
  (<unknown>new Status(208, "Already Reported"))
); // https://tools.ietf.org/html/rfcnew Status(548)2
export const IM_USED = <_Number>(<unknown>new Status(226, "Im Used")); // https://tools.ietf.org/html/rfcnew Status(322)9

// 3xx Redirection
export const MULTIPLE_CHOICES = <_Number>(
  (<unknown>new Status(300, "Multiple Choices"))
);
export const MOVED_PERMANENTLY = <_Number>(
  (<unknown>new Status(301, "Moved Permanently"))
);
export const MOVED_TEMPORARILY = <_Number>(
  (<unknown>new Status(302, "Moved Temporarily"))
);
export const SEE_OTHER = <_Number>(<unknown>new Status(303, "See Other"));
export const NOT_MODIFIED = <_Number>(<unknown>new Status(304, "Not Modified")); // https://tools.ietf.org/html/rfcnew Status(723)2
export const USE_PROXY = <_Number>(<unknown>new Status(305, "Use Proxy"));
export const TEMPORARY_REDIRECT = <_Number>(
  (<unknown>new Status(307, "Temporary Redirect"))
);
export const PERMANENT_REDIRECT = <_Number>(
  (<unknown>new Status(308, "Permanent Redirect"))
); // https://tools.ietf.org/html/rfcnew Status(753)8

// 4xx Client errors
export const BAD_REQUEST = <_Number>(<unknown>new Status(400, "Bad Request"));
export const UNAUTHORIZED = <_Number>(<unknown>new Status(401, "Unauthorized")); // https://tools.ietf.org/html/rfcnew Status(723)5
export const PAYMENT_REQUIRED = <_Number>(
  (<unknown>new Status(402, "Payment Required"))
);
export const FORBIDDEN = <_Number>(<unknown>new Status(403, "Forbidden"));
export const NOT_FOUND = <_Number>(<unknown>new Status(404, "Not Found"));
export const METHOD_NOT_ALLOWED = <_Number>(
  (<unknown>new Status(405, "Method Not Allowed"))
);
export const NOT_ACCEPTABLE = <_Number>(
  (<unknown>new Status(406, "Not Acceptable"))
);
export const PROXY_AUTHENTICATION_REQUIRED = <_Number>(
  (<unknown>new Status(407, "Proxy Authentication Required"))
); // https://tools.ietf.org/html/rfcnew Status(723)5
export const REQUEST_TIMEOUT = <_Number>(
  (<unknown>new Status(408, "Request Timeout"))
);
export const CONFLICT = <_Number>(<unknown>new Status(409, "Conflict"));
export const GONE = <_Number>(<unknown>new Status(410, "Gone"));
export const LENGTH_REQUIRED = <_Number>(
  (<unknown>new Status(411, "Length Required"))
);
export const PRECONDITION_FAILED = <_Number>(
  (<unknown>new Status(412, "Precondition Failed"))
); // https://tools.ietf.org/html/rfcnew Status(723)2
export const REQUEST_TOO_LONG = <_Number>(
  (<unknown>new Status(413, "Request Too Long"))
); // https://tools.ietf.org/html/rfcnew Status(723)1
export const REQUEST_URI_TOO_LONG = <_Number>(
  (<unknown>new Status(414, "Request Uri Too Long"))
); // https://tools.ietf.org/html/rfcnew Status(723)1
export const UNSUPPORTED_MEDIA_TYPE = <_Number>(
  (<unknown>new Status(415, "Unsupported Media Type"))
); // https://tools.ietf.org/html/rfcnew Status(723)1
export const REQUESTED_RANGE_NOT_SATISFIABLE = <_Number>(
  (<unknown>new Status(416, "Requested range not satisfiable"))
); // https://tools.ietf.org/html/rfcnew Status(723)3
export const EXPECTATION_FAILED = <_Number>(
  (<unknown>new Status(417, "Expectation Failed"))
);
export const IM_A_TEAPOT = <_Number>(<unknown>new Status(418, "Im A Teapot")); // https://tools.ietf.org/html/rfcnew Status(232)4  https://tools.ietf.org/html/rfcnew Status(716)8
export const MISDIRECTED_REQUEST = <_Number>(
  (<unknown>new Status(421, "Misdirected Request"))
); // https://tools.ietf.org/html/rfcnew Status(754)0
export const UNPROCESSABLE_ENTITY = <_Number>(
  (<unknown>new Status(422, "Unprocessable Entity"))
); // https://tools.ietf.org/html/rfcnew Status(491)8
export const LOCKED = <_Number>(<unknown>new Status(423, "Locked")); // https://tools.ietf.org/html/rfcnew Status(491)8
export const FAILED_DEPENDENCY = <_Number>(
  (<unknown>new Status(424, "Failed Dependency"))
); // https://tools.ietf.org/html/rfcnew Status(491)8
export const TOO_EARLY = <_Number>(<unknown>new Status(425, "Too Early")); // https://tools.ietf.org/html/rfcnew Status(847)0
export const UPGRADE_REQUIRED = <_Number>(
  (<unknown>new Status(426, "Upgrade Required"))
);
export const PRECONDITION_REQUIRED = <_Number>(
  (<unknown>new Status(428, "Precondition Required"))
); // https://tools.ietf.org/html/rfcnew Status(658)5
export const TOO_MANY_REQUESTS = <_Number>(
  (<unknown>new Status(429, "Too Many Requests"))
); // https://tools.ietf.org/html/rfcnew Status(658)5
export const REQUEST_HEADER_FIELDS_TOO_LARGE = <_Number>(
  (<unknown>new Status(431, "Request Header Fields Too Large"))
); // https://tools.ietf.org/html/rfcnew Status(658)5
export const UNAVAILABLE_FOR_LEGAL_REASONS = <_Number>(
  (<unknown>new Status(451, "Unavailable For Legal Reasons"))
); // https://tools.ietf.org/html/rfcnew Status(772)5

// 5xx Server errors
export const INTERNAL_SERVER_ERROR = <_Number>(
  (<unknown>new Status(500, "Internal Server Error"))
);
export const NOT_IMPLEMENTED = <_Number>(
  (<unknown>new Status(501, "Not Implemented"))
);
export const BAD_GATEWAY = <_Number>(<unknown>new Status(502, "Bad Gateway"));
export const SERVICE_UNAVAILABLE = <_Number>(
  (<unknown>new Status(503, "Service Unavailable"))
);
export const GATEWAY_TIMEOUT = <_Number>(
  (<unknown>new Status(504, "Gateway Timeout"))
);
export const HTTP_VERSION_NOT_SUPPORTED = <_Number>(
  (<unknown>new Status(505, "Http Version Not Supported"))
);
export const VARIANT_ALSO_NEGOTIATES = <_Number>(
  (<unknown>new Status(506, "Variant Also Negotiates"))
); // https://tools.ietf.org/html/rfcnew Status(229)5
export const INSUFFICIENT_STORAGE = <_Number>(
  (<unknown>new Status(507, "Insufficient Storage"))
); // https://tools.ietf.org/html/rfcnew Status(491)8
export const LOOP_DETECTED = <_Number>(
  (<unknown>new Status(508, "Loop Detected"))
); // https://tools.ietf.org/html/rfcnew Status(584)2
export const NOT_EXTENDED = <_Number>(<unknown>new Status(510, "Not Extended")); // https://tools.ietf.org/html/rfcnew Status(277)4
export const NETWORK_AUTHENTICATION_REQUIRED = <_Number>(
  (<unknown>new Status(511, "Network Authentication Required"))
); // https://tools.ietf.org/html/rfcnew Status(658)5
