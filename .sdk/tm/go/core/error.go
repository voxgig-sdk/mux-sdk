package core

type MuxError struct {
	IsMuxError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewMuxError(code string, msg string, ctx *Context) *MuxError {
	return &MuxError{
		IsMuxError: true,
		Sdk:              "Mux",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *MuxError) Error() string {
	return e.Msg
}
