const RegExpValidation = {
	Email: /^[A-za-z0-9][A-Za-z0-9._+-]*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/g,
	Password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g
} as const;

export default RegExpValidation;