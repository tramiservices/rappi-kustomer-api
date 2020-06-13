export interface ApiResponse<T> {
    isSuccess: boolean;
    mesagge: string,
    statusCode: number
    data: T
}