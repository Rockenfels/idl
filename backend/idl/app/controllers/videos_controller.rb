class VideosController < ApplicationController
    def index
        videos = Video.all()
        return json: videos
    end

    def create
        video = Video.new(video_params)

        if video.save
            return json: video
        else
            return json: {status: "error", errors: [video.errors.full_messages]}
        end
    end

    def show
        video = Video.find_by('id': [:params][:id])
        if !video.nil? 
            return json: video
        else
            return json: {message: 'video not found'}
        end
    end

    def update
        video = Video.find_by('id': [:params][:video][:id])
        if !video.empty?
            video.update(video_params)
            return json: video
        else
            return json: {message: "error - invalid video data"}
        end
    end

    def delete
        video = Video.find_by('id': [:params][:video][:id])
        if !video.nil?
            video.destroy
            return json: {message: 'video successfully deleted'}
        else
            return json: {message: 'couldn\'t find video'}
        end
    end

    private

    def video_params
        params.require(:video).permit(:name, :email, :password)
    end
end
